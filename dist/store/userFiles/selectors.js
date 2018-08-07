"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedFileIndex = function (state) { return (state.userFiles.filesInfo.selectedFileIndex); };
exports.isValidFileIndex = function (state) {
    var index = exports.getSelectedFileIndex(state);
    return index >= 0 && index < state.userFiles.filesInfo.files.length;
};
exports.getSelectedFile = function (state) {
    if (exports.isValidFileIndex(state)) {
        return state.userFiles.filesInfo.files[state.userFiles.filesInfo.selectedFileIndex];
    }
    return {
        name: '',
        content: '',
    };
};
exports.getSelectedFileName = function (state) {
    return exports.getSelectedFile(state).name;
};
exports.getSelectedCode = function (state) {
    return exports.getSelectedFile(state).content;
};
exports.getSelectedIsSaved = function (state) {
    if (!exports.isValidFileIndex(state)) {
        return true;
    }
    return state.userFiles.filesInfo.fileSaved[exports.getSelectedFileIndex(state)];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N0b3JlL3VzZXJGaWxlcy9zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJYSxRQUFBLG9CQUFvQixHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQ3RELEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUM5QyxFQUZ5RCxDQUV6RCxDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWdCO0lBQzdDLElBQU0sS0FBSyxHQUFHLDRCQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN4RSxDQUFDLENBQUM7QUFFVyxRQUFBLGVBQWUsR0FDdEIsVUFBQyxLQUFnQjtJQUNmLElBQUksd0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUN2RjtJQUNELE9BQU87UUFDSCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO0tBQ2QsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVPLFFBQUEsbUJBQW1CLEdBQzlCLFVBQUMsS0FBZ0I7SUFDZixPQUFPLHVCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUN0QixVQUFDLEtBQWdCO0lBQ2YsT0FBTyx1QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFFTyxRQUFBLGtCQUFrQixHQUFHLFVBQUMsS0FBZ0I7SUFDL0MsSUFBSSxDQUFDLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyw0QkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyJ9