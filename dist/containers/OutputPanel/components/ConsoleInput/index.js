"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_monaco_editor_1 = require("react-monaco-editor");
var styles_1 = require("@material-ui/core/styles");
var KeyboardArrowRight_1 = require("@material-ui/icons/KeyboardArrowRight");
var monacoOptions = {
    language: 'javascript',
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
};
var styles = function (theme) { return ({
    container: {
        width: '100%',
        padding: '8px',
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
    }
}); };
var ConsoleInput = /** @class */ (function (_super) {
    __extends(ConsoleInput, _super);
    function ConsoleInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.evalContext = eval;
        _this.editor = undefined;
        _this.editorDidMount = function (editor, monaco) {
            window.addEventListener('resize', _this.resizeEditor);
            editor.onKeyDown(function (event) {
                // tslint:disable-next-line:no-console
                if (event.keyCode === monaco.KeyCode.Enter && editor.getValue() !== '') {
                    event.preventDefault();
                    event.stopPropagation();
                    var command = editor.getValue();
                    editor.setValue('');
                    try {
                        // tslint:disable-next-line:no-eval
                        var result = _this.evalContext(command); // this is pretty bad
                        // pretty unsafe.
                        _this.props.onOutput(command, result, false);
                    }
                    catch (e) {
                        _this.props.onOutput(command, e.name + ": " + e.message, true);
                    }
                }
            });
        };
        _this.resizeEditor = function () {
            if (_this.editor !== undefined) {
                _this.editor.layout();
            }
        };
        return _this;
    }
    ConsoleInput.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resizeEditor);
    };
    ConsoleInput.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.container },
            React.createElement("div", { style: { color: 'white', height: '24px' } },
                React.createElement(KeyboardArrowRight_1.default, { color: "inherit" })),
            React.createElement("div", { style: { verticalAlign: 'middle', width: '100%', height: '20px' } },
                React.createElement(react_monaco_editor_1.default, { theme: "vs-dark", language: "elementaryjs", options: monacoOptions, editorDidMount: this.editorDidMount }))));
    };
    return ConsoleInput;
}(React.Component));
exports.default = styles_1.withStyles(styles)(ConsoleInput);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9PdXRwdXRQYW5lbC9jb21wb25lbnRzL0NvbnNvbGVJbnB1dC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLDJEQUErQztBQUUvQyxtREFBc0Y7QUFDdEYsNEVBQW1FO0FBRW5FLElBQU0sYUFBYSxHQUFtRDtJQUNsRSxRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUUsSUFBSTtJQUNkLGtCQUFrQixFQUFFLENBQUM7SUFDckIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsNEJBQTRCO0lBQzVCLFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLHFCQUFxQixFQUFFLENBQUM7S0FDM0I7SUFDRCxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLG9CQUFvQixFQUFFLEtBQUs7SUFDM0IsbUJBQW1CLEVBQUUsTUFBTTtJQUMzQixPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSztLQUNqQjtJQUNELFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFO0NBQ2YsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUF1QixVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDekMsU0FBUyxFQUFFO1FBQ1AsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLENBQUM7UUFDYixVQUFVLEVBQUUsUUFBUTtRQUNwQixlQUFlLEVBQUUs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