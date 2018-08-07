"use strict";
// BEING USED IN A SAGA at store/userLogin/
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
Object.defineProperty(exports, "__esModule", { value: true });
var apiHelpers_1 = require("./apiHelpers");
function validateUser(googleUser) {
    return __awaiter(this, void 0, void 0, function () {
        var email, id_token, url, data, possibleSessionId, response, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = googleUser.getBasicProfile().getEmail();
                    id_token = googleUser.getAuthResponse().id_token;
                    url = apiHelpers_1.getUrl('login');
                    data = { token: id_token, sessionId: null };
                    possibleSessionId = localStorage.getItem('sessionId');
                    if (possibleSessionId !== null) {
                        data.sessionId = possibleSessionId;
                    }
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
                    return [4 /*yield*/, response.json()];
                case 3:
                    jsonResponse = _a.sent();
                    if (response.status !== 200 || jsonResponse.message === 'Unauthorized') {
                        // if messaged back as unauthorized
                        googleUser.disconnect(); // sign user out (revoke given permissions)
                        return [2 /*return*/, apiHelpers_1.failureResponse('Only students and professors of CS 220 are allowed to log in')];
                    }
                    // important: the key here is 'sessionId'
                    localStorage.setItem('sessionId', jsonResponse.data.sessionId);
                    localStorage.setItem('userEmail', googleUser.getBasicProfile().getEmail());
                    return [2 /*return*/, apiHelpers_1.successResponse({ email: email })];
                case 4:
                    error_1 = _a.sent();
                    googleUser.disconnect();
                    return [2 /*return*/, apiHelpers_1.failureResponse('The authentication server seems to be down. Try again in a bit.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.validateUser = validateUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2FwaS92YWxpZGF0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczQywyQ0FBMEc7QUFHMUcsc0JBQW1DLFVBQStCOzs7Ozs7b0JBQ3hELEtBQUssR0FBRyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRWhELFFBQVEsR0FBRyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUVqRCxHQUFHLEdBQUcsbUJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFeEIsSUFBSSxHQUFnRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUV2RixpQkFBaUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLGlCQUFpQixLQUFLLElBQUksRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztxQkFDdEM7Ozs7b0JBR29CLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7NEJBQzlCLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs0QkFDMUIsT0FBTyxFQUFFO2dDQUNMLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ3JDO3lCQUNKLENBQUMsRUFBQTs7b0JBTkksUUFBUSxHQUFHLFNBTWY7b0JBRW1CLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXBDLFlBQVksR0FBRyxTQUFxQjtvQkFDMUMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLGNBQWMsRUFBRTt3QkFDcEUsbUNBQW1DO3dCQUNuQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQywyQ0FBMkM7d0JBQ3BFLHNCQUFPLDRCQUFlLENBQUMsOERBQThELENBQUMsRUFBQztxQkFDMUY7b0JBRUQseUNBQXlDO29CQUN6QyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFFM0Usc0JBQU8sNEJBQWUsQ0FBa0IsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQzs7O29CQUd4RCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3hCLHNCQUFPLDRCQUFlLENBQUMsaUVBQWlFLENBQUMsRUFBQzs7Ozs7Q0FFakc7QUF4Q0Qsb0NBd0NDIn0=