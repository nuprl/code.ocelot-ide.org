"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("../../store/notification/actions");
var NotificationBar_1 = require("./components/NotificationBar");
/**
 * Get the current state of the error notification
 * The state and the message of the error notification
 * The open and message will be props for ErrorSnackbar
 *
 * @param {RootState} state
 */
var mapStateToProps = function (state) { return ({
    open: state.notification.open,
    message: state.notification.message,
    position: state.notification.position,
}); };
/**
 * Using the dispatch function, make a handleClose function
 * that will close the error notification, this function
 * will be given to ErrorSnackbar as props
 *
 * @param {Dispatch} dispatch
 */
var mapDispatchToProps = function (dispatch) { return ({
    handleClose: function () { dispatch(actions_1.closeNotification()); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotificationBar_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLDREQUFxRTtBQUNyRSxnRUFBMkQ7QUFHM0Q7Ozs7OztHQU1HO0FBQ0gsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0lBQzdCLE9BQU8sRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87SUFDbkMsUUFBUSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUTtDQUN4QyxDQUFDLEVBSjRDLENBSTVDLENBQUM7QUFDSDs7Ozs7O0dBTUc7QUFDSCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsUUFBa0IsSUFBSyxPQUFBLENBQUM7SUFDaEQsV0FBVyxFQUFFLGNBQVEsUUFBUSxDQUFDLDJCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEQsQ0FBQyxFQUZpRCxDQUVqRCxDQUFDO0FBRUgsa0JBQWUscUJBQU8sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyx5QkFBZSxDQUFDLENBQUMifQ==