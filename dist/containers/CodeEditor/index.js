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
var selectors_1 = require("../../store/userFiles/selectors");
var actions_1 = require("../../store/userFiles/actions");
var react_redux_1 = require("react-redux");
var react_resize_detector_1 = require("react-resize-detector");
var lodash_1 = require("lodash");
var elemjsHighlighter_1 = require("./elemjsHighlighter");
var actions_2 = require("../../store/codeEditor/actions");
var debounceWait = 500; // milliseconds;
var CodeEditor = /** @class */ (function (_super) {
    __extends(CodeEditor, _super);
    function CodeEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.editorWillMount = function (monaco) {
            // monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            //     noLib: true,
            //     allowNonTsExtensions: true
            // });
            // monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            //     noSemanticValidation: true,
            //     noSyntaxValidation: false,
            // });
            monaco.languages.register({ id: 'elementaryjs' });
            monaco.languages.setMonarchTokensProvider('elementaryjs', elemjsHighlighter_1.default());
            monaco.languages.setLanguageConfiguration('elementaryjs', {
                comments: {
                    lineComment: '//',
                    blockComment: ['/*', '*/']
                },
                brackets: [
                    ['(', ')'],
                    ['{', '}'],
                    ['[', ']'],
                ]
            });
        };
        _this.editorDidMount = function (editor, monaco) {
            editor.focus();
            editor.getModel().updateOptions({ tabSize: 2 }); // what if there are different models?
            if (window.location.hostname === 'localhost') {
                var code = window.localStorage.getItem('code');
                if (code !== null) {
                    editor.setValue(code);
                }
            }
            _this.props.setEditor(editor);
            _this.editor = editor;
        };
        _this.handleResize = function () {
            if (typeof _this.editor === 'undefined') {
                return;
            }
            _this.editor.layout();
        };
        _this.triggerFileLoadingAnim = function () { return _this.props.triggerFileLoading(_this.props.fileIndex); };
        _this.saveCodeCloudWrapper = function () {
            // tslint:disable-next-line:no-console
            var fileEdit;
            while (_this.fileEditsQueue.length > 0) {
                fileEdit = _this.fileEditsQueue.shift();
                if (fileEdit.fileIndex === _this.props.fileIndex) {
                    continue;
                }
                _this.props.saveCodeToCloud(fileEdit.fileName, fileEdit.fileIndex, fileEdit.code, _this.props.loggedIn);
            }
            if (_this.props.isSaved) {
                return;
            }
            _this.props.saveCodeToCloud(_this.props.fileName, _this.props.fileIndex, _this.props.code, _this.props.loggedIn);
        };
        _this.debouncedSaveCodeCloud = lodash_1.debounce(_this.saveCodeCloudWrapper, debounceWait);
        _this.onChange = function (code) {
            if (_this.props.loggedIn) {
                // this.debouncedFileLoading();
                _this.triggerFileLoadingAnim();
                _this.debouncedSaveCodeCloud();
            }
            _this.props.saveCode(_this.props.fileIndex, code);
        };
        _this.editor = undefined;
        _this.fileEditsQueue = [];
        return _this;
    }
    CodeEditor.prototype.componentDidUpdate = function (prevProps) {
        if (this.editor === undefined) {
            return;
        }
        this.editor.updateOptions({ readOnly: false });
        if (!this.props.enabled) {
            this.editor.updateOptions({ readOnly: true });
        }
        var endingCriteria = prevProps.fileIndex === this.props.fileIndex
            || prevProps.isSaved
            || !prevProps.loggedIn
            || prevProps.fileIndex === -1;
        if (endingCriteria) {
            return;
        }
        this.fileEditsQueue.push({
            fileName: prevProps.fileName,
            fileIndex: prevProps.fileIndex,
            code: prevProps.code,
        });
        this.editor.focus();
    };
    CodeEditor.prototype.render = function () {
        var code = this.props.code;
        var options = {
            selectOnLineNumbers: true,
            mouseWheelZoom: true,
            fontSize: 18,
            fontFamily: 'Fira Mono',
            minimap: {
                enabled: false,
            },
        };
        return (React.createElement("div", { style: { height: '100%', width: '100%' } },
            React.createElement(react_resize_detector_1.default, { handleWidth: true, handleHeight: true, onResize: this.handleResize }),
            React.createElement(react_monaco_editor_1.default, { language: "elementaryjs", theme: "vs-dark", value: code, options: options, onChange: this.onChange, editorDidMount: this.editorDidMount, editorWillMount: this.editorWillMount, height: "calc(100% - 48px)" })));
    };
    return CodeEditor;
}(React.Component));
var mapStateToProps = function (state) { return ({
    enabled: selectors_1.isValidFileIndex(state),
    code: selectors_1.getSelectedCode(state),
    fileIndex: selectors_1.getSelectedFileIndex(state),
    fileName: selectors_1.getSelectedFileName(state),
    loggedIn: state.userLogin.loggedIn,
    isSaved: selectors_1.getSelectedIsSaved(state),
}); };
var mapDispatchToProps = function (dispatch) { return ({
    saveCodeToCloud: function (fileName, fileIndex, content, loggedIn) {
        dispatch(actions_1.editFileCloud(fileName, fileIndex, content, loggedIn));
    },
    saveCode: function (fileIndex, content) {
        dispatch(actions_1.editFileLocal(fileIndex, content));
    },
    setEditor: function (editor) {
        dispatch(actions_2.setMonacoEditor(editor));
    },
    triggerFileLoading: function (fileIndex) { dispatch(actions_1.markFileNotSaved(fileIndex)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Db2RlRWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsMkRBQStDO0FBRy9DLDZEQU15QztBQUN6Qyx5REFBK0Y7QUFFL0YsMkNBQXNDO0FBQ3RDLCtEQUF3RDtBQUN4RCxpQ0FBa0M7QUFDbEMseURBQWtEO0FBQ2xELDBEQUFpRTtBQUVqRSxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0I7QUE2QjFDO0lBQXlCLDhCQUFzQjtJQUczQyxvQkFBWSxLQUFZO1FBQXhCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFFRCxxQkFBZSxHQUFHLFVBQUMsTUFBMkI7WUFDMUMsc0VBQXNFO1lBQ3RFLG1CQUFtQjtZQUNuQixpQ0FBaUM7WUFDakMsTUFBTTtZQUNOLHlFQUF5RTtZQUN6RSxrQ0FBa0M7WUFDbEMsaUNBQWlDO1lBQ2pDLE1BQU07WUFDTixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsY0FBYyxFQUFFLDJCQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO2dCQUN0RCxRQUFRLEVBQUU7b0JBQ04sV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7aUJBQzdCO2dCQUNELFFBQVEsRUFBRTtvQkFDTixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO29CQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDYjthQUNKLENBQUMsQ0FB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