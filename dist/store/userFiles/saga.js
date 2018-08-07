"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var t = require("./types");
var actions_1 = require("../../store/notification/actions");
var actions_2 = require("../../store/userLogin/actions");
var actions_3 = require("../../store/userFiles/actions");
var batchActions_1 = require("../../store/batchActions");
var getUserFiles_1 = require("../../utils/api/getUserFiles");
var saveFileChanges_1 = require("../../utils/api/saveFileChanges");
var apiHelpers_1 = require("../../utils/api/apiHelpers");
function fetchFiles(action) {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(getUserFiles_1.getUserFiles)];
            case 1:
                response = _a.sent();
                if (!apiHelpers_1.isFailureResponse(response)) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.put(batchActions_1.batchActions(actions_1.triggerNotification(response.data.message, 'top'), actions_3.loadFilesFailure(), actions_2.logOutUser()))];
            case 2:
                _a.sent();
                return [2 /*return*/];
            case 3: return [4 /*yield*/, effects_1.put(actions_3.loadFilesSuccess(response.data.userFiles))];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchLoadUserFilesRequest() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(t.LOAD_FILES_REQUEST, fetchFiles)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchLoadUserFilesRequest = watchLoadUserFilesRequest;
var isDeleteFileAction = function (arg) { return (arg.type === 'DELETE_FILE'); };
var isEditFileAction = function (arg) { return (arg.type === 'EDIT_FILE_CLOUD'); };
function makeFileChanges(action) {
    var fileChangeRequest, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!action.loggedIn) {
                    return [2 /*return*/];
                }
                fileChangeRequest = [
                    {
                        fileName: action.fileName,
                        type: 'create',
                        changes: '',
                    }
                ];
                if (isDeleteFileAction(action)) {
                    fileChangeRequest = [
                        {
                            fileName: action.fileName,
                            type: 'delete'
                        }
                    ];
                }
                if (isEditFileAction(action)) {
                    fileChangeRequest = [
                        __assign({}, fileChangeRequest[0], { changes: action.content })
                    ];
                }
                return [4 /*yield*/, effects_1.call(saveFileChanges_1.saveChanges, fileChangeRequest)];
            case 1:
                response = _a.sent();
                if (!(isEditFileAction(action) && apiHelpers_1.isFailureResponse(response))) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.put(batchActions_1.batchActions(actions_1.triggerNotification('Unabled to connect to the internet, retrying...', 'bottom-right')))];
            case 2:
                _a.sent();
                return [2 /*return*/];
            case 3:
                if (!apiHelpers_1.isFailureResponse(response)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.put(actions_1.triggerNotification("Your session may be expired, try refreshing the page and try again", 'top')
                    // A better way to handle this is best
                    )];
            case 4:
                _a.sent();
                return [2 /*return*/];
            case 5:
                if (!isDeleteFileAction(action)) return [3 /*break*/, 7];
                return [4 /*yield*/, effects_1.put(actions_1.triggerNotification("File deleted: " + action.fileName, 'bottom-right'))];
            case 6:
                _a.sent();
                return [2 /*return*/];
            case 7:
                if (!isEditFileAction(action)) return [3 /*break*/, 9];
                return [4 /*yield*/, effects_1.put(actions_3.markFileSaved(action.fileIndex))];
            case 8:
                _a.sent();
                return [2 /*return*/];
            case 9: return [4 /*yield*/, effects_1.put(actions_1.triggerNotification("File created: " + action.fileName, 'bottom-right'))];
            case 10:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchCreateNewFile() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(t.CREATE_NEW_FILE, makeFileChanges)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchCreateNewFile = watchCreateNewFile;
function watchDeleteFile() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(t.DELETE_FILE, makeFileChanges)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchDeleteFile = watchDeleteFile;
function watchEditFile() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(t.EDIT_FILE_CLOUD, makeFileChanges)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchEditFile = watchEditFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS91c2VyRmlsZXMvc2FnYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTBEO0FBQzFELDJCQUE2QjtBQUM3Qiw0REFBdUU7QUFDdkUseURBQTJEO0FBQzNELHlEQUFtRztBQUNuRyx5REFBd0Q7QUFFeEQsNkRBQStFO0FBQy9FLG1FQUFpRjtBQUNqRix5REFBMkU7QUFFM0Usb0JBQXFCLE1BQWdDOzs7O29CQUNiLHFCQUFNLGNBQUksQ0FBQywyQkFBWSxDQUFDLEVBQUE7O2dCQUF0RCxRQUFRLEdBQXNCLFNBQXdCO3FCQUN4RCw4QkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBM0Isd0JBQTJCO2dCQUMzQixxQkFBTSxhQUFHLENBQ0wsMkJBQVksQ0FDUiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFDakQsMEJBQWdCLEVBQUUsRUFDbEIsb0JBQVUsRUFBRSxDQUNmLENBQ0osRUFBQTs7Z0JBTkQsU0FNQyxDQUFDO2dCQUNGLHNCQUFPO29CQUVYLHFCQUFNLGFBQUcsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUE7O2dCQUFwRCxTQUFvRCxDQUFDOzs7O0NBQ3hEO0FBRUQ7OztvQkFDSSxxQkFBTSxtQkFBUyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsRUFBQTs7Z0JBQWpELFNBQWlELENBQUM7Ozs7Q0FDckQ7QUFGRCw4REFFQztBQUVELElBQU0sa0JBQWtCLEdBQ3BCLFVBQUMsR0FBd0IsSUFBZ0MsT0FBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLEVBQTVCLENBQTRCLENBQUM7QUFFMUYsSUFBTSxnQkFBZ0IsR0FDbEIsVUFBQyxHQUF3QixJQUFtQyxPQUFBLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0FBRWpHLHlCQUEwQixNQUEyQjs7Ozs7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNsQixzQkFBTztpQkFDVjtnQkFDRyxpQkFBaUIsR0FBaUI7b0JBQ2xDO3dCQUNJLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTt3QkFDekIsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLEVBQUU7cUJBQ2Q7aUJBQ0osQ0FBQztnQkFDRixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM1QixpQkFBaUIsR0FBRzt3QkFDaEI7NEJBQ0ksUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFROzRCQUN6QixJQUFJLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0osQ0FBQztpQkFDTDtnQkFDRCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMxQixpQkFBaUIsR0FBRztxQ0FFVCxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFDdkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO3FCQUU5QixDQUFDO2lCQUNMO2dCQUNtQyxxQkFBTSxjQUFJLENBQUMsNkJBQVcsRUFBRSxpQkFBaUIsQ0FBQyxFQUFBOztnQkFBeEUsUUFBUSxHQUFzQixTQUEwQztxQkFDMUUsQ0FBQSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSw4QkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUF2RCx3QkFBdUQ7Z0JBQ3ZELHFCQUFNLGFBQUcsQ0FBQywyQkFBWSxDQUNsQiw2QkFBbUIsQ0FBQyxpREFBaUQsRUFBRSxjQUFjLENBQUMsQ0FHekYsQ0FBQyxFQUFBOztnQkFKRixTQUlFLENBQUM7Z0JBQ0gsc0JBQU87O3FCQUVQLDhCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUEzQix3QkFBMkI7Z0JBQzNCLHFCQUFNLGFBQUcsQ0FDTCw2QkFBbUIsQ0FBQyxvRUFBb0UsRUFBRSxLQUFLLENBQUM7b0JBQ2hHLHNDQUFzQztxQkFDekMsRUFBQTs7Z0JBSEQsU0FHQyxDQUFDO2dCQUNGLHNCQUFPOztxQkFFUCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBMUIsd0JBQTBCO2dCQUMxQixxQkFBTSxhQUFHLENBQUMsNkJBQW1CLENBQUMsbUJBQWlCLE1BQU0sQ0FBQyxRQUFVLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBQTs7Z0JBQWxGLFNBQWtGLENBQUM7Z0JBQ25GLHNCQUFPOztxQkFFUCxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBeEIsd0JBQXdCO2dCQUN4QixxQkFBTSxhQUFHLENBQUMsdUJBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQTs7Z0JBQTFDLFNBQTBDLENBQUM7Z0JBQzNDLHNCQUFPO29CQUVYLHFCQUFNLGFBQUcsQ0FBQyw2QkFBbUIsQ0FBQyxtQkFBaUIsTUFBTSxDQUFDLFFBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFBOztnQkFBbEYsU0FBa0YsQ0FBQzs7OztDQUN0RjtBQUVEOzs7b0JBQ0kscUJBQU0sbUJBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFBOztnQkFBbkQsU0FBbUQsQ0FBQzs7OztDQUN2RDtBQUZELGdEQUVDO0FBRUQ7OztvQkFDSSxxQkFBTSxtQkFBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUE7O2dCQUEvQyxTQUErQyxDQUFDOzs7O0NBQ25EO0FBRkQsMENBRUM7QUFFRDs7O29CQUNJLHFCQUFNLG1CQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFBQTs7Z0JBQW5ELFNBQW1ELENBQUM7Ozs7Q0FDdkQ7QUFGRCxzQ0FFQyJ9