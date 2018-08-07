"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("../../store/userFiles/actions");
var FilesFolder_1 = require("./components/FilesFolder");
var mapStateToProps = function (state) { return ({
    open: state.userFiles.folderInfo.open,
    disabled: state.userFiles.folderInfo.filesLoading
}); };
var mapDispatchToProps = function (dispatch) { return ({
    toggleFolder: function () { dispatch(actions_1.toggleFilesFolder()); },
    onCreateFile: function () { dispatch(actions_1.createNewFileField()); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FilesFolder_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0M7QUFFdEMseURBQXNGO0FBRXRGLHdEQUFtRDtBQUVuRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxDQUFDO0lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJO0lBQ3JDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZO0NBQ3BELENBQUMsRUFINEMsQ0FHNUMsQ0FBQztBQUVILElBQU0sa0JBQWtCLEdBQUcsVUFBQyxRQUFrQixJQUFLLE9BQUEsQ0FBQztJQUNoRCxZQUFZLEVBQUUsY0FBUSxRQUFRLENBQUMsMkJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxZQUFZLEVBQUUsY0FBUSxRQUFRLENBQUMsNEJBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxRCxDQUFDLEVBSGlELENBR2pELENBQUM7QUFFSCxrQkFBZSxxQkFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFXLENBQUMsQ0FBQyJ9