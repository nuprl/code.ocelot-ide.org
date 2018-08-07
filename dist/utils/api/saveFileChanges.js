"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var apiHelpers_1 = require("./apiHelpers");
exports.saveChanges = function (fileChanges) { return __awaiter(_this, void 0, void 0, function () {
    var url, userEmail, sessionId, data, response, jsonResponse, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!apiHelpers_1.validEmailSession()) {
                    return [2 /*return*/, apiHelpers_1.failureResponse('Seems like your session expired, try logging in again')];
                }
                url = apiHelpers_1.getUrl('changefile');
                userEmail = localStorage.getItem('userEmail');
                sessionId = localStorage.getItem('sessionId');
                data = { userEmail: userEmail, sessionId: sessionId, fileChanges: fileChanges };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 2:
                response = _a.sent();
                if (response.status !== 200) {
                    // create snackbar
                    return [2 /*return*/, apiHelpers_1.failureResponse('Something went wrong, try refreshing the page')];
                }
                return [4 /*yield*/, response.json()];
            case 3:
                jsonResponse = _a.sent();
                if (jsonResponse.status === 'error') {
                    // create snackbar
                    return [2 /*return*/, apiHelpers_1.failureResponse('Something went wrong, try refreshing the page')];
                }
                if (jsonResponse.status === 'failure') {
                    // create snackbar
                    return [2 /*return*/, apiHelpers_1.failureResponse('Something went wrong, try refreshing the page')];
                }
                return [2 /*return*/, apiHelpers_1.successResponse({ message: 'Changes saved' })];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, apiHelpers_1.failureResponse('Something went wrong, try refreshing the page')];
            case 5: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUZpbGVDaGFuZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2FwaS9zYXZlRmlsZUNoYW5nZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBc0RFOztBQXRERiwyQ0FRc0I7QUFJVCxRQUFBLFdBQVcsR0FBRyxVQUFPLFdBQXlCOzs7OztnQkFFdkQsSUFBSSxDQUFDLDhCQUFpQixFQUFFLEVBQUU7b0JBQ3RCLHNCQUFPLDRCQUFlLENBQUMsdURBQXVELENBQUMsRUFBQztpQkFDbkY7Z0JBRUssR0FBRyxHQUFHLG1CQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNCLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUMsQ0FBQzs7OztnQkFHaEUscUJBQU0sS0FBSyxDQUFDLEdBQUcsRUFBRTt3QkFDOUIsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMxQixPQUFPLEVBQUU7NEJBQ0wsY0FBYyxFQUFFLGtCQUFrQjt5QkFDckM7cUJBQ0osQ0FBQyxFQUFBOztnQkFOSSxRQUFRLEdBQUcsU0FNZjtnQkFFRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO29CQUN6QixrQkFBa0I7b0JBQ2xCLHNCQUFPLDRCQUFlLENBQUMsK0NBQStDLENBQUMsRUFBQztpQkFDM0U7Z0JBRW9CLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXBDLFlBQVksR0FBRyxTQUFxQjtnQkFFMUMsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtvQkFDakMsa0JBQWtCO29CQUNsQixzQkFBTyw0QkFBZSxDQUFDLCtDQUErQyxDQUFDLEVBQUM7aUJBQzNFO2dCQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7b0JBQ25DLGtCQUFrQjtvQkFDbEIsc0JBQU8sNEJBQWUsQ0FBQywrQ0FBK0MsQ0FBQyxFQUFDO2lCQUMzRTtnQkFDRCxzQkFBTyw0QkFBZSxDQUFzQixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUMsQ0FBQyxFQUFDOzs7Z0JBR3hFLHNCQUFPLDRCQUFlLENBQUMsK0NBQStDLENBQUMsRUFBQzs7OztLQUUvRSxDQUFDIn0=