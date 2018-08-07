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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Fade_1 = require("@material-ui/core/Fade");
var List_1 = require("@material-ui/core/List");
require("../../static/styles/Scrollbar.css");
var Paper_1 = require("@material-ui/core/Paper");
var Button_1 = require("@material-ui/core/Button");
var Popper_1 = require("@material-ui/core/Popper");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var ListItem_1 = require("@material-ui/core/ListItem");
var Collapse_1 = require("@material-ui/core/Collapse");
var Storage_1 = require("@material-ui/icons/Storage");
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var BubbleChart_1 = require("@material-ui/icons/BubbleChart");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var ListSubheader_1 = require("@material-ui/core/ListSubheader");
var apiHelpers_1 = require("../../utils/api/apiHelpers");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var ClickAwayListener_1 = require("@material-ui/core/ClickAwayListener");
var selectors_1 = require("../../store/userFiles/selectors");
var getHistory_1 = require("../../utils/api/getHistory");
var styles_1 = require("@material-ui/core/styles");
var react_monaco_editor_1 = require("react-monaco-editor");
var monacoEditor = require("monaco-editor");
var styles = function (theme) { return ({
    list: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
    },
    listItems: {
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        minHeight: '350px',
        minWidth: '400px',
        maxHeight: '350px',
        maxWidth: '400px',
    },
    newDense: {
        paddingBottom: '0px',
    },
    secondaryText: {
        fontFamily: '\'Fira Mono\', monospace',
    },
    sameCode: {
        backgroundColor: theme.palette.secondary.dark + '9e',
    }
}); };
var monacoOptions = {
    wordWrap: 'on',
    overviewRulerLanes: 0,
    glyphMargin: false,
    lineNumbers: 'off',
    folding: false,
    selectOnLineNumbers: false,
    // cursorStyle: 'line-thin',
    scrollbar: {
        useShadows: false,
        horizontal: 'hidden',
        verticalScrollbarSize: 9,
    },
    minimap: {
        enabled: false,
    },
    contextmenu: false,
    readOnly: true,
    fontFamily: 'Fira Mono',
    fontSize: 10,
    renderSideBySide: false
};
var truncateString = function (str) {
    if (str.length > 25) {
        return str.substr(0, 25).replace(/\n/g, '⏎') + '...';
    }
    return str.replace(/\n/g, '⏎');
};
var HistoryButton = /** @class */ (function (_super) {
    __extends(HistoryButton, _super);
    function HistoryButton(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            _this.openHistory();
            _this.setState({ loading: true });
            getHistory_1.getFileHistory(_this.props.fileName).then(function (response) {
                _this.setState({ loading: false, history: [] });
                if (apiHelpers_1.isFailureResponse(response)) {
                    // tslint:disable-next-line:no-console
                    console.log(response.data.message);
                    // probably a notification.
                    return;
                }
                _this.setState({ history: response.data.history });
            }).catch(function (err) {
                // tslint:disable-next-line:no-console
                console.log(err);
            });
        };
        _this.onClickAway = function () { _this.setState({ open: false, codeOpenIndex: -1 }); };
        _this.openHistory = function () { _this.setState({ open: true }); };
        _this.openTooltip = function () { _this.setState({ tooltipOpen: true }); };
        _this.closeTooltip = function () { _this.setState({ tooltipOpen: false }); };
        _this.toggleCode = function (index) {
            if (_this.state.codeOpenIndex === index) {
                _this.setState({ codeOpenIndex: -1 });
                return;
            }
            _this.setState({ codeOpenIndex: index });
        };
        _this.onRestore = function (index) {
            return function () {
                _this.setState({ open: false });
                var editor = _this.props.editor;
                var history = _this.state.history;
                if (editor === undefined || history.length - 1 < index) {
                    return;
                }
                var numLines = editor.getModel().getLineCount();
                var finalColumn = editor.getModel().getLineMaxColumn(numLines);
                editor.executeEdits('restore', [{
                        range: new monacoEditor.Range(1, 1, numLines, finalColumn),
                        text: _this.state.history[index].code,
                        forceMoveMarkers: true
                    }]);
            };
        };
        _this.state = {
            tooltipOpen: false,
            open: false,
            loading: false,
            history: [],
            codeOpenIndex: -1,
        };
        return _this;
    }
    HistoryButton.prototype.render = function () {
        var _this = this;
        if (!this.props.loggedIn) {
            return null;
        }
        var _a = this.props, classes = _a.classes, code = _a.code;
        var _b = this.state, open = _b.open, tooltipOpen = _b.tooltipOpen, loading = _b.loading, history = _b.history, codeOpenIndex = _b.codeOpenIndex;
        var content = React.createElement(CircularProgress_1.default, { size: 50, style: { marginTop: '125px', marginLeft: '175px' }, color: "inherit" });
        if (!loading) {
            content = history.map(function (elem, index) { return (React.createElement("div", { key: "" + elem.timeCreated + index, className: code === elem.code ? "" + classes.sameCode : '' },
                React.createElement(ListItem_1.default, { button: true, onClick: function () { return _this.toggleCode(index); } },
                    React.createElement(ListItemIcon_1.default, null,
                        React.createElement(BubbleChart_1.default, null)),
                    React.createElement(ListItemText_1.default, { classes: {
                            secondary: classes.secondaryText
                        }, primary: elem.dateCreated + " " + elem.timeCreated, secondary: "" + truncateString(elem.code) })),
                React.createElement(Collapse_1.default, { in: codeOpenIndex === index, timeout: "auto", unmountOnExit: true },
                    React.createElement(List_1.default, { component: "div", dense: true },
                        React.createElement(ListItem_1.default, null,
                            React.createElement("div", { style: { height: '100%', width: '100%' } },
                                React.createElement(react_monaco_editor_1.MonacoDiffEditor, { language: "elementaryjs", height: 210, original: _this.props.code, value: elem.code, options: monacoOptions }),
                                code !== elem.code &&
                                    React.createElement(Button_1.default, { variant: "outlined", color: "secondary", fullWidth: true, style: { marginTop: '1em', alignSelf: 'right' }, onClick: _this.onRestore(index) }, "Restore"))))))); });
        }
        if (!loading && history.length === 0) {
            content = React.createElement(Typography_1.default, { variant: "headline", align: "center", color: "inherit", style: { marginTop: '150px' } }, "No history saved :)");
        }
        return (React.createElement("div", null,
            React.createElement(Tooltip_1.default, { title: "History", onOpen: this.openTooltip, onClose: this.closeTooltip, open: !open && tooltipOpen },
                React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "Layout", buttonRef: function (node) {
                        _this.anchorEl = node;
                    }, onClick: this.onClick },
                    React.createElement(Storage_1.default, null))),
            React.createElement(Popper_1.default, { open: open, placement: "bottom-end", anchorEl: this.anchorEl, disablePortal: true, modifiers: {
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                }, transition: true }, function (_a) {
                var TransitionProps = _a.TransitionProps;
                return (React.createElement(Fade_1.default, __assign({}, TransitionProps, { timeout: 150 }),
                    React.createElement(Paper_1.default, null,
                        React.createElement(ClickAwayListener_1.default, { onClickAway: _this.onClickAway },
                            React.createElement("div", { className: classes.list },
                                React.createElement(List_1.default, { dense: true, subheader: React.createElement(ListSubheader_1.default, { component: "div" }, "History"), classes: {
                                        dense: classes.newDense
                                    } },
                                    React.createElement("div", { className: classes.listItems + " scrollbars" }, content)))))));
            })));
    };
    return HistoryButton;
}(React.Component));
var mapStateToProps = function (state) { return ({
    fileName: selectors_1.getSelectedFileName(state),
    loggedIn: state.userLogin.loggedIn,
    code: selectors_1.getSelectedCode(state),
    editor: state.codeEditor.monacoEditor
}); };
exports.default = styles_1.withStyles(styles)(react_redux_1.connect(mapStateToProps)(HistoryButton));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9IaXN0b3J5QnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQiwyQ0FBc0M7QUFFdEMsK0NBQTBDO0FBQzFDLCtDQUEwQztBQUMxQyw2Q0FBMkM7QUFDM0MsaURBQTRDO0FBQzVDLG1EQUE4QztBQUM5QyxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELHVEQUFrRDtBQUNsRCx1REFBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELDJEQUFzRDtBQUN0RCwyREFBc0Q7QUFDdEQsOERBQXdEO0FBQ3hELCtEQUEwRDtBQUMxRCwrREFBMEQ7QUFDMUQsaUVBQTREO0FBQzVELHlEQUErRDtBQUMvRCx1RUFBa0U7QUFDbEUseUVBQW9FO0FBQ3BFLDZEQUF1RjtBQUN2Rix5REFBeUU7QUFDekUsbURBQXNGO0FBQ3RGLDJEQUF1RDtBQUN2RCw0Q0FBOEM7QUFFOUMsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUk7S0FDOUM7SUFDRCxTQUFTLEVBQUU7UUFDUCxNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLE1BQU07UUFDakIsU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLE9BQU87S0FDcEI7SUFDRCxRQUFRLEVBQUU7UUFDTixhQUFhLEVBQUUsS0FBSztLQUN2QjtJQUNELGFBQWEsRUFBRTtRQUNYLFVBQVUsRUFBRSwwQkFBMEI7S0FDekM7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