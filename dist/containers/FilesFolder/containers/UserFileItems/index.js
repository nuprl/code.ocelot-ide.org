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
var FileItem_1 = require("../../components/FileItem");
var ListItemStyles_1 = require("../../../../components/ListItemStyles");
var actions_1 = require("../../../../store/userFiles/actions");
var react_redux_1 = require("react-redux");
var UserFiles = /** @class */ (function (_super) {
    __extends(UserFiles, _super);
    function UserFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserFiles.prototype.render = function () {
        var _this = this;
        var _a = this.props, files = _a.files, selectedFileIndex = _a.selectedFileIndex, fileSaved = _a.fileSaved, loggedIn = _a.loggedIn;
        return (files.map(function (fileObj, index) { return (React.createElement("div", { className: "fileItem", key: "" + fileObj.name + (index + 1) },
            React.createElement(FileItem_1.default, { isSelected: selectedFileIndex === index, onSelect: _this.props.makeHandleClickFile(index), onDelete: _this.props.makeHandleDeleteFile(index, fileObj.name, loggedIn), isSaved: fileSaved[index], name: fileObj.name, key: "" + fileObj.name + (index + 2) }))); }));
    };
    return UserFiles;
}(React.Component));
var mapStateToProps = function (state) { return ({
    files: state.userFiles.filesInfo.files,
    selectedFileIndex: state.userFiles.filesInfo.selectedFileIndex,
    fileSaved: state.userFiles.filesInfo.fileSaved,
    loggedIn: state.userLogin.loggedIn,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    makeHandleClickFile: function (index) { return (function () {
        dispatch(actions_1.selectFile(index));
    }); },
    makeHandleDeleteFile: function (index, name, loggedIn) { return (function () {
        // index is used for removing the file from store
        // the name is for removing the file from the database
        dispatch(actions_1.deleteFile(index, name, loggedIn));
    }); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ListItemStyles_1.default(UserFiles));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9jb250YWluZXJzL1VzZXJGaWxlSXRlbXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixzREFBaUQ7QUFDakQsd0VBQW1FO0FBS25FLCtEQUE2RTtBQUM3RSwyQ0FBc0M7QUFXdEM7SUFBd0IsNkJBQXdEO0lBQWhGOztJQXNCQSxDQUFDO0lBcEJHLDBCQUFNLEdBQU47UUFBQSxpQkFtQkM7UUFsQlMsSUFBQSxlQUE4RCxFQUE1RCxnQkFBSyxFQUFFLHdDQUFpQixFQUFFLHdCQUFTLEVBQUUsc0JBQVEsQ0FBZ0I7UUFDckUsT0FBTyxDQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUEwQyxFQUFFLEtBQWEsSUFBSyxPQUFBLENBQ3JFLDZCQUNJLFNBQVMsRUFBQyxVQUFVLEVBQ3BCLEdBQUcsRUFBRSxLQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUcsS0FBSyxHQUFHLENBQUMsQ0FBRTtZQUVsQyxvQkFBQyxrQkFBUSxJQUNMLFVBQVUsRUFBRSxpQkFBaUIsS0FBSyxLQUFLLEVBQ3ZDLFFBQVEsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUMvQyxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFDeEUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDekIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQ2xCLEdBQUcsRUFBRSxLQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUcsS0FBSyxHQUFHLENBQUMsQ0FBRSxHQUNwQyxDQUNBLENBQ1QsRUFkd0UsQ0FjeEUsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBdEJELENBQXdCLEtBQUssQ0FBQyxTQUFTLEdBc0J0QztBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUM7SUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUs7SUFDdEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCO0lBQzlELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTO0lBQzlDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7Q0FDckMsQ0FBQyxFQUw0QyxDQUs1QyxDQUFDO0FBRUgsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLFFBQWtCLElBQUssT0FBQSxDQUFDO0lBQ2hELG1CQUFtQixFQUFFLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQztRQUNyQyxRQUFRLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxFQUZzQyxDQUV0QztJQUNGLG9CQUFvQixFQUFFLFVBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxRQUFpQixJQUFLLE9BQUEsQ0FBQztRQUN2RSxpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELFFBQVEsQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsRUFKd0UsQ0FJeEU7Q0FDTCxDQUFDLEVBVGlELENBU2pELENBQUM7QUFDSCxrQkFBZSxxQkFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLHdCQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyJ9