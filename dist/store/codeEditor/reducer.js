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
    codeRunner: undefined,
    testRunner: undefined,
    monacoEditor: undefined,
};
var codeEditor = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case t.SET_CODE_RUNNER:
            return __assign({}, state, { codeRunner: action.runner });
        case t.REMOVE_CODE_RUNNER:
            return __assign({}, state, { codeRunner: undefined });
        case t.SET_TEST_RUNNER:
            return __assign({}, state, { testRunner: action.runner });
        case t.REMOVE_TEST_RUNNER:
            return __assign({}, state, { testRunner: undefined });
        case t.SET_MONACO_EDITOR:
            return __assign({}, state, { monacoEditor: action.monacoEditor });
        default:
            return state;
    }
};
exports.default = codeEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS9jb2RlRWRpdG9yL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJCQUE2QjtBQUU3QixJQUFNLFlBQVksR0FBc0I7SUFDcEMsVUFBVSxFQUFFLFNBQVM7SUFDckIsVUFBVSxFQUFFLFNBQVM7SUFDckIsWUFBWSxFQUFFLFNBQVM7Q0FDMUIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUErQixVQUMzQyxLQUF1QyxFQUN2QyxNQUEyQjtJQUQzQixzQkFBQSxFQUFBLG9CQUF1QztJQUV2QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxDQUFDLENBQUMsZUFBZTtZQUNsQixvQkFDTyxLQUFLLElBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQzNCO1FBQ04sS0FBSyxDQUFDLENBQUMsa0JBQWtCO1lBQ3JCLG9CQUNPLEtBQUssSUFDUixVQUFVLEVBQUUsU0FBUyxJQUN2QjtRQUNOLEtBQUssQ0FBQyxDQUFDLGVBQWU7WUFDbEIsb0JBQ08sS0FBSyxJQUNSLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxJQUMzQjtRQUNOLEtBQUssQ0FBQyxDQUFDLGtCQUFrQjtZQUNyQixvQkFDTyxLQUFLLElBQ1IsVUFBVSxFQUFFLFNBQVMsSUFDdkI7UUFDTixLQUFLLENBQUMsQ0FBQyxpQkFBaUI7WUFDcEIsb0JBQ08sS0FBSyxJQUNSLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUNwQztRQUNMO1lBQ0ksT0FBTyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMifQ==