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
var initialState = {
    loggedIn: false,
    loading: false,
    email: '',
};
var userLogin = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case t.LOG_OUT_USER:
            return {
                loggedIn: false,
                loading: false,
                email: '',
            };
        case t.LOG_IN_USER_REQUEST:
            return __assign({}, state, { loading: true });
        case t.LOG_IN_USER_SUCCESS:
            return {
                loading: false,
                email: action.email,
                loggedIn: true,
            };
        case t.LOADING_ONGOING:
            return __assign({}, state, { loading: true });
        default:
            return state;
    }
};
exports.default = userLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS91c2VyTG9naW4vcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTZCO0FBRzdCLElBQU0sWUFBWSxHQUFxQjtJQUNuQyxRQUFRLEVBQUUsS0FBSztJQUNmLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLEVBQUU7Q0FDWixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQThCLFVBQ3pDLEtBQXNDLEVBQ3RDLE1BQTBCO0lBRDFCLHNCQUFBLEVBQUEsb0JBQXNDO0lBRXRDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLENBQUMsQ0FBQyxZQUFZO1lBQ2YsT0FBTztnQkFDSCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUUsS0FBSztnQkFDZCxLQUFLLEVBQUUsRUFBRTthQUNaLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxtQkFBbUI7WUFDdEIsb0JBQ08sS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2Y7UUFDTixLQUFLLENBQUMsQ0FBQyxtQkFBbUI7WUFDdEIsT0FBTztnQkFDSCxPQUFPLEVBQUUsS0FBSztnQkFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxlQUFlO1lBQ2xCLG9CQUNPLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNmO1FBQ047WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyJ9