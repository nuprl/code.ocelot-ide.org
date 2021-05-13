"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
require("static/styles/ConsoleTabs.css");
const react_monaco_editor_1 = require("react-monaco-editor");
const KeyboardArrowRight_1 = require("@material-ui/icons/KeyboardArrowRight");
const console_feed_1 = require("console-feed");
const nanoid_1 = require("nanoid");
const consoleStyle_1 = require("./static/styles/consoleStyle");
require("static/styles/Scrollbar.css");
const stringifyObject = require('./stringifyObject');
class ConsoleOutput extends React.Component {
    constructor() {
        super(...arguments);
        this.logRef = null;
    }
    componentDidUpdate() {
        if (this.logRef !== null) {
            this.logRef.scrollTop = this.logRef.scrollHeight;
        }
    }
    render() {
        const { logs } = this.props;
        return (React.createElement("div", { className: "scrollbars", style: {
                backgroundColor: '#242424',
                overflowY: 'auto',
                overflowX: 'hidden',
                flexGrow: 1
            }, ref: (divElem) => this.logRef = divElem },
            React.createElement(console_feed_1.Console, { logs: logs, variant: "dark", styles: consoleStyle_1.inspectorTheme })));
    }
}
const lineHeight = 22; // pixels
const maxHeight = 126;
const monacoOptions = {
    wordWrap: 'on',
    overviewRulerLanes: 0,
    glyphMargin: false,
    lineNumbers: 'off',
    folding: false,
    selectOnLineNumbers: false,
    selectionHighlight: false,
    // cursorStyle: 'line-thin',
    scrollbar: {
        useShadows: false,
        horizontal: 'hidden',
        verticalScrollbarSize: 9,
    },
    lineDecorationsWidth: 0,
    scrollBeyondLastLine: false,
    renderLineHighlight: 'none',
    minimap: {
        enabled: false,
    },
    contextmenu: false,
    ariaLabel: 'ConsoleInput',
    fontFamily: 'Fira Mono',
    fontSize: 16,
    autoClosingBrackets: false,
};
const s1 = {
    width: '100%',
    padding: '8px',
    display: 'flex',
    flexShrink: 0,
    backgroundColor: '#1e1e1e'
};
const styles = theme => ({
    root: {
        borderTop: '1px solid white',
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
        height: '100%',
        width: '100%'
    },
});
class OutputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.editor = undefined;
        this.command = (command, result, isError) => {
            this.appendLogMessage({ method: 'command', data: [command] });
            if (isError) {
                this.error(result);
            }
            else {
                this.log(result);
            }
        };
        this.editorDidMount = (editor, monaco) => {
            this.editor = editor;
            window.addEventListener('resize', this.resizeEditor);
            let currentLineCount = 1;
            editor.onDidChangeModelContent(() => {
                const totalLineCount = editor.getModel().getLineCount();
                if (totalLineCount !== currentLineCount) {
                    this.setState({
                        editorHeight: Math.min(maxHeight, totalLineCount * lineHeight)
                    });
                    editor.layout();
                    currentLineCount = totalLineCount;
                }
            });
            const retrieveHistory = (event, isDownkey) => {
                event.preventDefault();
                event.stopPropagation();
                if (!isDownkey && this.state.historyLocation + 1 > this.state.commandHistory.length - 1) { // if at the top of history
                    return;
                }
                let newHistoryLocation = Math.min(this.state.historyLocation + 1, this.state.commandHistory.length - 1);
                if (isDownkey) {
                    newHistoryLocation = Math.max(this.state.historyLocation - 1, -1);
                }
                editor.setValue(this.state.commandHistory[newHistoryLocation] || '');
                const newLineCount = editor.getModel().getLineCount();
                const newColumn = editor.getModel().getLineMaxColumn(newLineCount);
                editor.setPosition({ lineNumber: newLineCount, column: newColumn });
                this.setState({ historyLocation: newHistoryLocation });
            };
            editor.onKeyDown(event => {
                const currentCursorLineNum = editor.getPosition().lineNumber;
                const totalNumLines = editor.getModel().getLineCount();
                if (event.keyCode === monaco.KeyCode.UpArrow && currentCursorLineNum === 1) { // if topmost line
                    retrieveHistory(event, false);
                    return;
                }
                if (event.keyCode === monaco.KeyCode.DownArrow && currentCursorLineNum === totalNumLines) { // if last line
                    retrieveHistory(event, true);
                    return;
                }
                if (event.keyCode === monaco.KeyCode.Enter && event.shiftKey) {
                    return;
                }
                if (event.keyCode === monaco.KeyCode.Enter && !event.shiftKey) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.props.sandbox.mode.getValue() !== 'stopped') {
                        window.console.log('Ignoring console command, program running');
                        return;
                    }
                    const command = editor.getValue();
                    if (command.trim() === '') {
                        return;
                    }
                    editor.setValue('');
                    this.setState({
                        historyLocation: -1,
                        commandHistory: [command, ...this.state.commandHistory]
                    });
                    this.props.sandbox.onConsoleInput(command);
                }
            });
        };
        this.resizeEditor = () => {
            if (this.editor !== undefined) {
                this.editor.layout();
            }
        };
        this.editorWillMount = (monaco) => {
            monaco.languages.register({ id: 'elementaryjs' });
            monaco.languages.setLanguageConfiguration('elementaryjs', {
                comments: {
                    lineComment: '//',
                    blockComment: ['/*', '*/']
                },
                indentationRules: {
                    increaseIndentPattern: /^.*\{[^}\"']*$/,
                    decreaseIndentPattern: /^(.*\*\/)?\s*\}[;\s]*$/
                },
            });
            monaco.languages.registerCompletionItemProvider('elementaryjs', {
                // A hacky way to get rid of autocomplete suggestions completely.
                // returning an empty array will not 'override' the autocomplete
                // but giving my own autocomplete items can override it it seems.
                provideCompletionItems(model, position) {
                    return [{
                            label: '',
                            kind: monaco.languages.CompletionItemKind.Text
                        }];
                }
            });
        };
        this.state = {
            logs: [],
            commandHistory: [],
            historyLocation: -1,
            editorHeight: lineHeight,
        };
    }
    error(message) {
        this.appendLogMessage({
            method: 'log',
            data: [
                `%c${message}`,
                'color: #ff0000; font-weight: bold'
            ]
        });
    }
    log(...message) {
        for (let i = 0; i < message.length; ++i) {
            if (typeof (message[i]) === 'object') {
                const stringRep = stringifyObject(message[i], {
                    indent: '  ',
                    singleQuotes: false,
                    inlineCharacterLimit: 12,
                    transform: (obj, prop, originalResult) => {
                        if (Array.isArray(obj[prop]) && obj[prop].length > 30) {
                            let splitArray = originalResult.split('\n');
                            let indent = splitArray[splitArray.length - 1].match(/\S/).index;
                            return splitArray.slice(0, 4).concat([' '.repeat(indent) + `${splitArray.length - 2 - 3} more...`, splitArray[splitArray.length - 1]]).join('\n');
                        }
                        return originalResult;
                    }
                });
                message[i] = stringRep;
            }
        }
        this.appendLogMessage({ method: 'log', data: message });
    }
    /** Appends a message to the log. Bounds scrollback to 100 items. */
    appendLogMessage(message) {
        this.setState((prevState) => {
            const messageView = message;
            /** Get a unique ID for each message. Solve React rendering issue */
            /** Ignore is needed due to the fact that the maintainer of console-feed ignore id in Message defintion */
            // @ts-ignore
            messageView.id = nanoid_1.nanoid(7);
            let newLog = [...prevState.logs, messageView];
            if (newLog.length > 100) {
                newLog = newLog.slice(newLog.length - 100);
            }
            return { logs: newLog };
        });
    }
    componentDidMount() {
        this.props.sandbox.setConsole(this);
        this.props.aref(this);
    }
    echo(command) {
        this.appendLogMessage({ method: 'command', data: [command] });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeEditor);
    }
    render() {
        const { classes, } = this.props;
        return (React.createElement("div", { className: classes.root, id: "outputPanel" },
            React.createElement("div", { style: {
                    height: '100%',
                    flexDirection: 'column',
                    display: 'flex'
                } },
                React.createElement(ConsoleOutput, { logs: this.state.logs }),
                React.createElement("div", { style: s1 },
                    React.createElement("div", { style: { color: 'white', height: '24px' } },
                        React.createElement(KeyboardArrowRight_1.default, { color: "inherit" })),
                    React.createElement("div", { style: { verticalAlign: 'middle', width: '100%', height: `${this.state.editorHeight}px` } },
                        React.createElement(react_monaco_editor_1.default, { theme: "vs-dark", language: "elementaryjs", options: monacoOptions, editorDidMount: this.editorDidMount, editorWillMount: this.editorWillMount }))))));
    }
}
exports.default = styles_1.withStyles(styles)(OutputPanel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0cHV0UGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvT3V0cHV0UGFuZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHFEQUFzRjtBQUN0Rix5Q0FBdUM7QUFHdkMsNkRBQStDO0FBRS9DLDhFQUFtRTtBQUVuRSwrQ0FBdUM7QUFDdkMsbUNBQWdDO0FBQ2hDLCtEQUE4RDtBQUM5RCx1Q0FBcUM7QUFFckMsTUFBTSxlQUFlLEdBQVEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFMUQsTUFBTSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQWtDO0lBQXBFOztRQUNJLFdBQU0sR0FBMEIsSUFBSSxDQUFDO0lBeUJ6QyxDQUFDO0lBdkJHLGtCQUFrQjtRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTVCLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsWUFBWSxFQUN2QixLQUFLLEVBQUU7Z0JBQ0gsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsUUFBUSxFQUFFLENBQUM7YUFDZCxFQUNELEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPO1lBQ3ZDLG9CQUFDLHNCQUFPLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSw2QkFBYyxHQUFJLENBQzVELENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQUVELE1BQU0sVUFBVSxH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