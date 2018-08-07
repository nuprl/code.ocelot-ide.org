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
var react_redux_1 = require("react-redux");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Code_1 = require("@material-ui/icons/Code");
var IconButton_1 = require("@material-ui/core/IconButton");
var Delete_1 = require("@material-ui/icons/Delete");
var ListItemSecondaryAction_1 = require("@material-ui/core/ListItemSecondaryAction");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var Input_1 = require("@material-ui/core/Input");
var FormControl_1 = require("@material-ui/core/FormControl");
var ListItemStyles_1 = require("../../../../components/ListItemStyles");
var actions_1 = require("../../../../store/userFiles/actions");
var FormHelperText_1 = require("@material-ui/core/FormHelperText");
// this is copied from backend
var isSimpleValidFileName = function (fileName) {
    return /^\w+\.js/.test(fileName);
};
var NewFileField = /** @class */ (function (_super) {
    __extends(NewFileField, _super);
    function NewFileField(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = function (event) {
            if (event.keyCode !== 13 || event.target === null) {
                return;
            }
            var name = event.target.value;
            var result = _this.props.files.filter(function (elem) { return elem.name === name; });
            if (result.length !== 0 || !isSimpleValidFileName(name)) {
                _this.props.notifyError();
                return;
            }
            _this.props.onCreateFile(name, _this.props.loggedIn);
        };
        return _this;
    }
    NewFileField.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.wantNewFile === prevProps.wantNewFile) {
            return;
        }
        var filenameInput = document.getElementById('filename-input');
        if (filenameInput === null || !this.props.wantNewFile) {
            return;
        }
        filenameInput.addEventListener('keyup', this.listener);
    };
    NewFileField.prototype.componentWillUnmount = function () {
        var filenameInput = document.getElementById('filename-input');
        if (filenameInput === null || !this.props.wantNewFile) {
            return;
        }
        filenameInput.removeEventListener('keyup', this.listener);
    };
    NewFileField.prototype.render = function () {
        var _a = this.props, wantNewFile = _a.wantNewFile, deleteFileField = _a.deleteFileField, classes = _a.classes, newFileError = _a.newFileError;
        if (!wantNewFile) {
            return null;
        }
        return (React.createElement(ListItem_1.default, { className: classes.nested + " " + classes.listItemColor, classes: { dense: classes.tinyPadding }, dense: true },
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Code_1.default, { className: classes.listItemColor })),
            React.createElement(ListItemText_1.default, { disableTypography: true, primary: React.createElement(FormControl_1.default, { className: classes.formControl, "aria-describedby": "name-helper-text", margin: "none", error: newFileError },
                    React.createElement(Input_1.default, { id: "filename-input", classes: {
                            root: classes.textField
                        }, autoFocus: true }),
                    newFileError &&
                        React.createElement(FormHelperText_1.default, { id: "duplicate-error", margin: "dense" }, "Duplicate Filename")), classes: { root: classes.listItemColor } }),
            React.createElement(ListItemSecondaryAction_1.default, { className: "" + classes.listItemColor },
                React.createElement(Tooltip_1.default, { id: "tooltip-icon", title: "Delete" },
                    React.createElement(IconButton_1.default, { "aria-label": "delete", color: "inherit", className: "" + classes.listItemColor, onClick: deleteFileField },
                        React.createElement(Delete_1.default, { color: "inherit" }))))));
    };
    return NewFileField;
}(React.Component));
var mapStateToProps = function (state) { return ({
    wantNewFile: state.userFiles.filesInfo.newFile,
    files: state.userFiles.filesInfo.files,
    newFileError: state.userFiles.filesInfo.newFileError,
    loggedIn: state.userLogin.loggedIn
}); };
var mapDispatchToProps = function (dispatch) { return ({
    deleteFileField: function () { dispatch(actions_1.deleteNewFileField()); },
    onCreateFile: function (fileName, loggedIn) {
        dispatch(actions_1.createNewFile(fileName, loggedIn));
        dispatch(actions_1.deleteNewFileField());
    },
    notifyError: function () {
        dispatch(actions_1.triggerNewFileError());
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ListItemStyles_1.default(NewFileField));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9jb250YWluZXJzL05ld0ZpbGVGaWVsZC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLDJDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCxnREFBK0M7QUFDL0MsMkRBQXNEO0FBQ3RELG9EQUFtRDtBQUNuRCxxRkFBZ0Y7QUFDaEYscURBQWdEO0FBQ2hELGlEQUE0QztBQUM1Qyw2REFBd0Q7QUFDeEQsd0VBQW1FO0FBS25FLCtEQUE2RztBQUU3RyxtRUFBOEQ7QUFFOUQsOEJBQThCO0FBQzlCLElBQU0scUJBQXFCLEdBQUcsVUFBQyxRQUFnQjtJQUMzQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBWUY7SUFBMkIsZ0NBQXNCO0lBRTdDLHNCQUFZLEtBQVk7UUFBeEIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FhZjtRQVpHLEtBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFLO1lBQ2xCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQy9DLE9BQU87YUFDVjtZQUNELElBQU0sSUFBSSxHQUFJLEtBQUssQ0FBQyxNQUE4QixDQUFDLEtBQUssQ0FBQztZQUN6RCxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1lBQ3JFLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIs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