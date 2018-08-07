"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var LoginLogout_1 = require("./components/LoginLogout");
var actions_1 = require("../../store/userLogin/actions");
var batchActions_1 = require("../../store/batchActions");
var actions_2 = require("../../store/userFiles/actions");
var mapStateToProps = function (state) { return ({
    loggedIn: state.userLogin.loggedIn,
    loading: state.userLogin.loading,
    email: state.userLogin.email,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onLogin: function (googleUser) { dispatch(actions_1.logInUserRequest(googleUser)); },
    onLogout: function () {
        dispatch(batchActions_1.batchActions(actions_1.logOutUser(), actions_2.closeFilesFolder()));
        dispatch(actions_2.resetDefaultFiles());
        dispatch(actions_2.openFilesFolder());
        // Not sure if I should put this here
        localStorage.removeItem('userEmail');
        localStorage.removeItem('sessionId');
    },
    // surround with curly braces so that it does not return what dispatch returns
    onLoading: function () { dispatch(actions_1.loadingOngoing()); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoginLogout_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Vc2VyTG9naW4vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLHdEQUFtRDtBQUVuRCx5REFBNkY7QUFFN0YseURBQXdEO0FBQ3hELHlEQUFxRztBQUVyRyxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxDQUFDO0lBQzNDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7SUFDbEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztJQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0NBQy9CLENBQUMsRUFKNEMsQ0FJNUMsQ0FBQztBQUVILElBQU0sa0JBQWtCLEdBQUcsVUFBQyxRQUFrQixJQUFLLE9BQUEsQ0FBQztJQUNoRCxPQUFPLEVBQUUsVUFBQyxVQUErQixJQUFPLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixRQUFRLEVBQUU7UUFDTixRQUFRLENBQ0osMkJBQVksQ0FDUixvQkFBVSxFQUFFLEVBQ1osMEJBQWdCLEVBQUUsQ0FDckIsQ0FDSixDQUFDO1FBQ0YsUUFBUSxDQUFDLDJCQUFpQixFQUFFLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMseUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDNUIscUNBQXFDO1FBQ3JDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsOEVBQThFO0lBQzlFLFNBQVMsRUFBRSxjQUFRLFFBQVEsQ0FBQyx3QkFBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkQsQ0FBQyxFQWpCaUQsQ0FpQmpELENBQUM7QUFFSCxrQkFBZSxxQkFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFXLENBQUMsQ0FBQyJ9