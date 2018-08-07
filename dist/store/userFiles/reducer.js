"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("./types");
var helloWorldCode = "/**\n * @param name to greet\n * @returns a greeting\n */\nfunction greeting(name) {\n  return `Hello ${name}!`\n}\n\nconsole.log(greeting('World'));\n";
var initialState = {
    folderInfo: {
        open: true,
        filesLoading: false,
    },
    filesInfo: {
        files: [{
                name: 'helloWorld.js',
                content: helloWorldCode
            }],
        selectedFileIndex: 0,
        newFile: false,
        newFileError: false,
        fileSaved: [true]
    }
};
var userFiles = function (state, action) {
    if (state === void 0) { state = initialState; }
    var newFiles, newFileSaved, newState;
    switch (action.type) {
        case t.LOAD_FILES_REQUEST:
            return __assign({}, state, { folderInfo: {
                    filesLoading: true,
                    open: false,
                } });
        case t.LOAD_FILES_SUCCESS:
            return {
                filesInfo: __assign({}, state.filesInfo, { files: action.userFiles, fileSaved: new Array(action.userFiles.length).fill(true), selectedFileIndex: -1 }),
                folderInfo: {
                    open: true,
                    filesLoading: false,
                }
            };
        case t.LOAD_FILES_FAILURE:
            return __assign({}, state, { folderInfo: __assign({}, state.folderInfo, { filesLoading: false }) });
        case t.TOGGLE_FILES_FOLDER:
            return __assign({}, state, { folderInfo: __assign({}, state.folderInfo, { open: !state.folderInfo.open }) });
        case t.OPEN_FILES_FOLDER:
            return __assign({}, state, { folderInfo: __assign({}, state.folderInfo, { open: true }) });
        case t.CLOSE_FILES_FOLDER:
            return __assign({}, state, { folderInfo: __assign({}, state.folderInfo, { open: false }) });
        case t.CREATE_NEW_FILE_FIELD:
            return {
                filesInfo: __assign({}, state.filesInfo, { newFile: true }),
                folderInfo: __assign({}, state.folderInfo, { open: true })
            };
        case t.DELETE_NEW_FILE_FIELD:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { newFile: false }) });
        case t.CREATE_NEW_FILE:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { files: state.filesInfo.files.concat([
                        {
                            name: action.fileName,
                            content: ''
                        },
                    ]), selectedFileIndex: state.filesInfo.files.length, newFileError: false, fileSaved: state.filesInfo.fileSaved.concat([
                        true,
                    ]) }) });
        case t.SELECT_FILE:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { selectedFileIndex: action.fileIndex }) });
        case t.DELETE_FILE:
            var isFileIndex = function (elem, index) { return index !== action.fileIndex; };
            newFiles = state.filesInfo.files.filter(isFileIndex);
            newFileSaved = state.filesInfo.fileSaved.filter(isFileIndex);
            newState = __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { files: newFiles, fileSaved: newFileSaved }) });
            if (action.fileIndex === state.filesInfo.selectedFileIndex) {
                newState.filesInfo.selectedFileIndex = -1;
            }
            return newState;
        case t.TRIGGER_NEW_FILE_ERROR:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { newFileError: true }) });
        case t.EDIT_FILE_LOCAL:
            newFiles = state.filesInfo.files.slice();
            newFiles[action.fileIndex] = __assign({}, state.filesInfo.files[action.fileIndex], { content: action.content });
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { files: newFiles }) });
        case t.EDIT_FILE_CLOUD:
            newFileSaved = state.filesInfo.fileSaved.slice();
            newFileSaved[action.fileIndex] = false;
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { fileSaved: newFileSaved }) });
        // Temporary solution, will plan to expand this.
        // How do we plan to handle when there's no internet?
        // case t.EDIT_FILE_FAILURE:
        //     return {
        //         ...state,
        //         filesInfo: {
        //             ...state.filesInfo,
        //             fileSaved: new Array(state.filesInfo.files.length).fill(true),
        //             selectedFileIndex: -1
        //         }
        //     };
        case t.MARK_FILE_NOT_SAVED:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { fileSaved: state.filesInfo.fileSaved.map(function (elem, index) {
                        if (index === action.fileIndex) {
                            return false;
                        }
                        return elem;
                    }) }) });
        case t.MARK_FILE_SAVED:
            return __assign({}, state, { filesInfo: __assign({}, state.filesInfo, { fileSaved: state.filesInfo.fileSaved.map(function (elem, index) {
                        if (index === action.fileIndex) {
                            return true;
                        }
                        return elem;
                    }) }) });
        case t.RESET_DEFAULT_FILES:
            return __assign({}, initialState);
        default:
            return state;
    }
};
exports.default = userFiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS91c2VyRmlsZXMvcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkJBQTZCO0FBRTdCLElBQU0sY0FBYyxHQUFHLHlKQVN0QixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQXFCO0lBQ25DLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsZUFBZTtnQkFDckIsT0FBTyxFQUFFLGNBQWM7YUFDMUIsQ0FBQztRQUNGLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDcEI7Q0FDSixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQThCLFVBQ3pDLEtBQXNDLEVBQ3RDLE1BQTBCO0lBRDFCLHNCQUFBLEVBQUEsb0JBQXNDO0lBRXRDLElBQUksUUFBc0IsRUFDdEIsWUFBdUIsRUFDdkIsUUFBMEIsQ0FBQztJQUMvQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxDQUFDLENBQUMsa0JBQWtCO1lBQ3JCLG9CQUNPLEtBQUssSUFDUixVQUFVLEVBQUU7b0JBQ1IsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLElBQUksRUFBRSxLQUFLO2lCQUNkLElBQ0g7UUFDTixLQUFLLENBQUMsQ0FBQyxrQkFBa0I7WUFDckIsT0FBTztnQkFDSCxTQUFTLGVBQ0YsS0FBSyxDQUFDLFNBQVMsSUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQ3ZCLFNBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FB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