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
var redux_1 = require("redux");
// -- Reducers --
var reducer_1 = require("./notification/reducer");
var reducer_2 = require("./userLogin/reducer");
var reducer_3 = require("./userFiles/reducer");
var reducer_4 = require("./codeEditor/reducer");
// -- Redux Store --
var redux_2 = require("redux");
var redux_saga_1 = require("redux-saga");
var batchActions_1 = require("./batchActions");
// -- Saga stuff -- 
var effects_1 = require("redux-saga/effects");
var saga_1 = require("./userLogin/saga");
var saga_2 = require("./userFiles/saga");
// combine all reducers
var rootReducer = redux_1.combineReducers({
    notification: reducer_1.default,
    userLogin: reducer_2.default,
    userFiles: reducer_3.default,
    codeEditor: reducer_4.default,
});
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: // Combine all sagas 
            return [4 /*yield*/, effects_1.all([
                    saga_1.watchUserLoginRequest(),
                    saga_2.watchLoadUserFilesRequest(),
                    saga_2.watchCreateNewFile(),
                    saga_2.watchDeleteFile(),
                    saga_2.watchEditFile(),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.configureStore = function () {
    var sagaMiddleware = redux_saga_1.default();
    var store = redux_2.createStore(batchActions_1.enableBatching(rootReducer), redux_2.applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUQ7QUFNakQsaUJBQWlCO0FBQ2pCLGtEQUF5RDtBQUN6RCwrQ0FBbUQ7QUFDbkQsK0NBQW1EO0FBQ25ELGdEQUFxRDtBQUNyRCxvQkFBb0I7QUFDcEIsK0JBQXFEO0FBQ3JELHlDQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQsb0JBQW9CO0FBQ3BCLDhDQUF5QztBQUN6Qyx5Q0FBeUQ7QUFDekQseUNBSzBCO0FBWTFCLHVCQUF1QjtBQUN2QixJQUFNLFdBQVcsR0FBdUIsdUJBQWUsQ0FBWTtJQUMvRCxZQUFZLEVBQUUsaUJBQW1CO0lBQ2pDLFNBQVMsRUFBRSxpQkFBZ0I7SUFDM0IsU0FBUyxFQUFFLGlCQUFnQjtJQUMzQixVQUFVLEVBQUUsaUJBQWlCO0NBQ2hDLENBQUMsQ0FBQztBQUVIOzs7b0JBQXVCLHFCQUFxQjtZQUN4QyxxQkFBTSxhQUFHLENBQUM7b0JBQ04sNEJBQXFCLEVBQUU7b0JBQ3ZCLGdDQUF5QixFQUFFO29CQUMzQix5QkFBa0IsRUFBRTtvQkFDcEIsc0JBQWUsRUFBRTtvQkFDakIsb0JBQWEsRUFBRTtpQkFDbEIsQ0FBQyxFQUFBOztnQkFORixTQU1FLENBQUM7Ozs7Q0FDTjtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBRTFCLElBQU0sY0FBYyxHQUFHLG9CQUFvQixFQUFFLENBQUM7SUFDOUMsSUFBTSxLQUFLLEdBQUcsbUJBQVcsQ0FDckIsNkJBQWMsQ0FBQyxXQUFXLENBQUMsRUFDM0IsdUJBQWUsQ0FBQyxjQUFjLENBQUcsQ0FDcEMsQ0FBQztJQUVGLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=