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
exports.saveHistory = function (fileName, code) { return __awaiter(_this, void 0, void 0, function () {
    var url, userEmail, sessionId, data, response, jsonResponse, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!apiHelpers_1.validEmailSession()) {
                    return [2 /*return*/, apiHelpers_1.failureResponse('Seems like your session expired, try logging in again')];
                }
                url = apiHelpers_1.getUrl('savehistory');
                userEmail = localStorage.getItem('userEmail');
                sessionId = localStorage.getItem('sessionId');
                data = {
                    userEmail: userEmail,
                    sessionId: sessionId,
                    snapshot: {
                        fileName: fileName,
                        code: code,
                    }
                };
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
                // tslint:disable-next-line:no-console
                console.log(jsonResponse);
                if (jsonResponse.status === 'error') {
                    return [2 /*return*/, apiHelpers_1.failureResponse('Something went wrong, try refreshing the page')];
                }
                if (jsonResponse.status === 'failure') {
                    return [2 /*return*/, apiHelpers_1.failureResponse(jsonResponse.message)]; // quite inconsistent actually
                    // I have message as its own field in the response but for my response
                    // for the frontend, I always have a data field that contains either message, or...data
                }
                // be sure to open this list (set state to open)
                return [2 /*return*/, apiHelpers_1.successResponse({
                        message: 'History saved'
                    })];
            case 4:
                error_1 = _a.sent();
                // Stop loading the file (set state to not loading)
                return [2 /*return*/, apiHelpers_1.failureResponse('Couldn\'t connect to the server at the moment, try again later')];
            case 5: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUhpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvYXBpL3NhdmVIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWlFRTs7QUFqRUYsMkNBT3NCO0FBSVQsUUFBQSxXQUFXLEdBQUcsVUFBTyxRQUFnQixFQUFFLElBQVk7Ozs7O2dCQUU1RCxJQUFJLENBQUMsOEJBQWlCLEVBQUUsRUFBRTtvQkFDdEIsc0JBQU8sNEJBQWUsQ0FBQyx1REFBdUQsQ0FBQyxFQUFDO2lCQUNuRjtnQkFFSyxHQUFHLEdBQUcsbUJBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFNUIsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzlDLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLEdBQUc7b0JBQ1QsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLFNBQVMsRUFBRSxTQUFTO29CQUNwQixRQUFRLEVBQUU7d0JBQ04sUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLElBQUksRUFBRSxJQUFJO3FCQUNiO2lCQUNKLENBQUM7Ozs7Z0JBR21CLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzlCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUIsT0FBTyxFQUFFOzRCQUNMLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3FCQUNKLENBQUMsRUFBQTs7Z0JBTkksUUFBUSxHQUFHLFNBTWY7Z0JBRW1CLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXBDLFlBQVksR0FBRyxTQUFxQjtnQkFDMUMsc0NBQXNDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUUxQixJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO29CQUNqQyxzQkFBTyw0QkFBZSxDQUFDLCtDQUErQyxDQUFDLEVBQUM7aUJBQzNFO2dCQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7b0JBQ25DLHNCQUFPLDRCQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsOEJBQThCO29CQUM1RSxzRUFBc0U7b0JBQ3RFLHVGQUF1RjtpQkFDMUY7Z0JBRUQsZ0RBQWdEO2dCQUNoRCxzQkFBTyw0QkFBZSxDQUFzQjt3QkFDeEMsT0FBTyxFQUFFLGVBQWU7cUJBQzNCLENBQUMsRUFBQzs7O2dCQUdILG1EQUFtRDtnQkFDbkQsc0JBQU8sNEJBQWUsQ0FDbEIsZ0VBQWdFLENBQ25FLEVBQUM7Ozs7S0FFVCxDQUFDIn0=