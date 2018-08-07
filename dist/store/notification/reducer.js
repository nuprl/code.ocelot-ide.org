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
var initialState = { open: false, message: '', position: 'bottom-right' };
var errorNotification = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case t.TRIGGER_NOTIFICATION:
            return {
                open: true,
                message: action.message,
                position: action.position
            };
        case t.CLOSE_NOTIFICATION:
            return __assign({}, state, { open: false });
        default:
            return state;
    }
};
exports.default = errorNotification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS9ub3RpZmljYXRpb24vcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkJBQTZCO0FBRTdCLElBQU0sWUFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7QUFFL0YsSUFBTSxpQkFBaUIsR0FBaUMsVUFDcEQsS0FBeUMsRUFDekMsTUFBNkI7SUFEN0Isc0JBQUEsRUFBQSxvQkFBeUM7SUFFekMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssQ0FBQyxDQUFDLG9CQUFvQjtZQUN2QixPQUFPO2dCQUNILElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQzVCLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxrQkFBa0I7WUFDckIsb0JBQ08sS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ2I7UUFDTjtZQUNJLE9BQU8sS0FBSyxDQUFDO0tBQ3BCO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsaUJBQWlCLENBQUMifQ==