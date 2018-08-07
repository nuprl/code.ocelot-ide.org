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
var Fade_1 = require("@material-ui/core/Fade");
var react_google_login_1 = require("react-google-login");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var GoogleLoginButton = /** @class */ (function (_super) {
    __extends(GoogleLoginButton, _super);
    function GoogleLoginButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alternateLoginButton = function (onClickProp) {
            if (typeof onClickProp === 'undefined') {
                return (React.createElement(Button_1.default, { color: "inherit" }, " Login "));
            }
            var onClick = function () {
                onClickProp.onClick();
                _this.props.onClick();
            };
            var buttonContent = React.createElement(Typography_1.default, { color: "inherit", variant: "button" }, "Sign in");
            if (_this.props.loading) {
                buttonContent = React.createElement(CircularProgress_1.default, { size: 14, color: "inherit", thickness: 6 });
            }
            return (React.createElement(Button_1.default, { color: "inherit", onClick: onClick, disabled: _this.props.loading }, buttonContent));
        };
        return _this;
    }
    GoogleLoginButton.prototype.render = function () {
        var show = this.props.show;
        var props = this.props;
        return (React.createElement(Fade_1.default, { in: show },
            React.createElement("div", { style: { display: (show ? 'inline-block' : 'none') } },
                React.createElement(react_google_login_1.GoogleLogin, { clientId: "883053712992-bp84lpgqrdgceasrhvl80m1qi8v2tqe9.apps.googleusercontent.com", onSuccess: props.onSuccess, onFailure: props.onFailure, prompt: "select_account" // always prompts user to select a specific account
                    , render: this.alternateLoginButton, isSignedIn: true }))));
    };
    return GoogleLoginButton;
}(React.Component));
exports.default = GoogleLoginButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlTG9naW5CdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Vc2VyTG9naW4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLCtDQUEwQztBQUMxQyx5REFBa0c7QUFDbEcsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5Qyx1RUFBa0U7QUFVbEU7SUFBZ0MscUNBQXVDO0lBQXZFO1FBQUEscUVBOENDO1FBNUNHLDBCQUFvQixHQUFHLFVBQUMsV0FBcUM7WUFDekQsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FDSCxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLGNBQWlCLENBQzNDLENBQUM7YUFDTDtZQUVELElBQU0sT0FBTyxHQUFHO2dCQUNaLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUM7WUFFRixJQUFJLGFBQWEsR0FBRyxvQkFBQyxvQkFBVSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFFBQVEsY0FBcUIsQ0FBQztZQUN0RixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNwQixhQUFhLEdBQUcsb0JBQUMsMEJBQWdCLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUksQ0FBQzthQUNoRjtZQUVELE9BQU8sQ0FDSCxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQ2pFLGFBQWEsQ0FDVCxDQUNaLENBQUM7UUFDTixDQUFDLENBQUM7O0lBc0JOLENBQUM7SUFwQkcsa0NBQU0sR0FBTjtRQUNZLElBQUEsc0JBQUksQ0FBZ0I7UUFDNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixPQUFPLENBQ0gsb0JBQUMsY0FBSSxJQUFDLEVBQUUsRUFBRSxJQUFJO1lBQ1YsNkJBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyRCxvQkFBQyxnQ0FBVyxJQUNSLFFBQVEsRUFBQywwRUFBMEUsRUFDbkYsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUMxQixNQUFNLEVBQUMsZ0JBQWdCLENBQUMsbURBQW1EO3NCQUMzRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUNqQyxVQUFVLFNBQ1osQ0FDQSxDQUNILENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUE5Q0QsQ0FBZ0MsS0FBSyxDQUFDLFNBQVMsR0E4QzlDO0FBRUQsa0JBQWUsaUJBQWlCLENBQUMifQ==