"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Taken from: https://github.com/reduxjs/redux/issues/911#issuecomment-149361073
// A batching action creator, groups multiple actions together
exports.batchActions = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return ({
        type: 'BATCH_ACTIONS',
        actions: actions,
    });
};
// A high order reducer
exports.enableBatching = function (reducer) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case 'BATCH_ACTIONS':
                return action.actions.reduce(batchingReducer, state);
            default:
                return reducer(state, action);
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvcmUvYmF0Y2hBY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsaUZBQWlGO0FBQ2pGLDhEQUE4RDtBQUVqRCxRQUFBLFlBQVksR0FBRztJQUFDLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsNEJBQW9COztJQUFtQixPQUFBLENBQUM7UUFDakUsSUFBSSxFQUFFLGVBQWU7UUFDckIsT0FBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQztBQUhrRSxDQUdsRSxDQUFDO0FBRUgsdUJBQXVCO0FBQ1YsUUFBQSxjQUFjLEdBQUcsVUFBQyxPQUEyQjtJQUN0RCxPQUFPLHlCQUF5QixLQUFnQixFQUFFLE1BQWM7UUFDNUQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssZUFBZTtnQkFDaEIsT0FBUSxNQUF1QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNFO2dCQUNJLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyJ9