"use strict";
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
var types_1 = require("./types");
var actions_1 = require("../notification/actions");
var actions_2 = require("../userFiles/actions");
var actions_3 = require("./actions");
var batchActions_1 = require("../../store/batchActions");
var validateUser_1 = require("../../utils/api/validateUser");
var apiHelpers_1 = require("../../utils/api/apiHelpers");
function validate(action) {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(validateUser_1.validateUser, action.googleUser)];
            case 1:
                response = _a.sent();
                if (!apiHelpers_1.isFailureResponse(response)) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.put(batchActions_1.batchActions(actions_1.triggerNotification(response.data.message, 'top'), actions_3.logOutUser()))];
            case 2:
                _a.sent();
                return [2 /*return*/];
            case 3: return [4 /*yield*/, effects_1.put(actions_3.logInUserSuccess(response.data.email))];
            case 4:
                _a.sent();
                // batching these two actions here would not let Saga know I dispatched a loadFilesRequest
                return [4 /*yield*/, effects_1.put(actions_2.loadFilesRequest())];
            case 5:
                // batching these two actions here would not let Saga know I dispatched a loadFilesRequest
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchUserLoginRequest() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(types_1.LOG_IN_USER_REQUEST, validate)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchUserLoginRequest = watchUserLoginRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS91c2VyTG9naW4vc2FnYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUEwRDtBQUMxRCxpQ0FBc0U7QUFDdEUsbURBQThEO0FBQzlELGdEQUF3RDtBQUN4RCxxQ0FBeUQ7QUFDekQseURBQXdEO0FBRXhELDZEQUFrRjtBQUNsRix5REFBK0Q7QUFFL0Qsa0JBQW1CLE1BQThCOzs7O29CQUNOLHFCQUFNLGNBQUksQ0FBQywyQkFBWSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBQTs7Z0JBQTVFLFFBQVEsR0FBeUIsU0FBMkM7cUJBQzlFLDhCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUEzQix3QkFBMkI7Z0JBQzNCLHFCQUFNLGFBQUcsQ0FBQywyQkFBWSxDQUNsQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFDakQsb0JBQVUsRUFBRSxDQUNmLENBQUMsRUFBQTs7Z0JBSEYsU0FHRSxDQUFDO2dCQUNILHNCQUFPO29CQUVYLHFCQUFNLGFBQUcsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7O2dCQUFoRCxTQUFnRCxDQUFDO2dCQUNqRCwwRkFBMEY7Z0JBQzFGLHFCQUFNLGFBQUcsQ0FBQywwQkFBZ0IsRUFBRSxDQUFDLEVBQUE7O2dCQUQ3QiwwRkFBMEY7Z0JBQzFGLFNBQTZCLENBQUM7Ozs7Q0FDakM7QUFFRDs7O29CQUNJLHFCQUFNLG1CQUFTLENBQUMsMkJBQW1CLEVBQUUsUUFBUSxDQUFDLEVBQUE7O2dCQUE5QyxTQUE4QyxDQUFDOzs7O0NBQ2xEO0FBRkQsc0RBRUMifQ==