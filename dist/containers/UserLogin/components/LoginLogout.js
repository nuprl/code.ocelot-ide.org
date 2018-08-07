"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var EmailText_1 = require("./EmailText");
var GoogleLogoutButton_1 = require("./GoogleLogoutButton");
var GoogleLoginButton_1 = require("./GoogleLoginButton");
var LoginLogout = /** @class */ (function (_super) {
    __extends(LoginLogout, _super);
    function LoginLogout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSuccess = function (response) {
            _this.props.onLogin(response);
        };
        _this.onFailure = function (response) {
            _this.props.onLogout(); // need a better way to have less logic in this module
            // there's way too much logic embedded for a presentational component
        };
        return _this;
    }
    LoginLogout.prototype.render = function () {
        var _a = this.props, loggedIn = _a.loggedIn, email = _a.email, loading = _a.loading;
        var props = this.props;
        return (React.createElement("div", null,
            React.createElement(EmailText_1.default, { show: loggedIn, email: email }),
            React.createElement(GoogleLogoutButton_1.default, { show: loggedIn, onClick: this.props.onLogout }),
            React.createElement(GoogleLoginButton_1.default, { show: !loggedIn, loading: loading, onSuccess: this.onSuccess, onFailure: this.onFailure, onClick: props.onLoading })));
    };
    return LoginLogout;
}(React.Component));
exports.default = LoginLogout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Mb2dvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Vc2VyTG9naW4vY29tcG9uZW50cy9Mb2dpbkxvZ291dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBRS9CLHlDQUFvQztBQUNwQywyREFBc0Q7QUFDdEQseURBQW9EO0FBV3BEO0lBQTBCLCtCQUFpQztJQUEzRDtRQUFBLHFFQThCQztRQTVCRyxlQUFTLEdBQUcsVUFBQyxRQUEwRDtZQUNuRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUErQixDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFBO1FBRUQsZUFBUyxHQUFHLFVBQUMsUUFBMkI7WUFDcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLHNEQUFzRDtZQUM3RSxxRUFBcUU7UUFDekUsQ0FBQyxDQUFBOztJQXFCTCxDQUFDO0lBbkJHLDRCQUFNLEdBQU47UUFDVSxJQUFBLGVBQXlDLEVBQXZDLHNCQUFRLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxDQUFnQjtRQUNoRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLE9BQU8sQ0FDSDtZQUNJLG9CQUFDLG1CQUFTLElBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFJO1lBQzNDLG9CQUFDLDRCQUFrQixJQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFJO1lBQ3BFLG9CQUFDLDJCQUFpQixJQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDZixPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxHQUMxQixDQUNDLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUE5QkQsQ0FBMEIsS0FBSyxDQUFDLFNBQVMsR0E4QnhDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=