"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Fade_1 = require("@material-ui/core/Fade");
var Button_1 = require("@material-ui/core/Button");
var react_google_login_1 = require("react-google-login");
var Typography_1 = require("@material-ui/core/Typography");
/**
 * An alternate log out button for logging out
 * This overrides the default given by react-google-login
 * @param {{ onClick: () => void }} onClickProp
 * @returns A button
 */
var alternateLogoutButton = function (onClickProp) {
    if (typeof onClickProp === 'undefined') {
        return (React.createElement(Button_1.default, { color: "inherit" }, "Logout"));
    }
    return (React.createElement(Button_1.default, { color: "inherit", onClick: onClickProp.onClick },
        React.createElement(Typography_1.default, { color: "inherit", variant: "button" }, "Sign out")));
};
/**
 * A GoogleLogoutButton (a stateless component)
 *
 * @param {GoogleLogoutButtonProps} props
 * @returns {JSX.Element} a Logout button
 */
function GoogleLogoutButton(props) {
    var show = props.show;
    return (React.createElement(Fade_1.default, { in: show },
        React.createElement("div", { style: { display: (show ? 'inline-block' : 'none') } },
            React.createElement(react_google_login_1.GoogleLogout, { onLogoutSuccess: props.onClick, render: alternateLogoutButton }))));
}
exports.default = GoogleLogoutButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlTG9nb3V0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lcnMvVXNlckxvZ2luL2NvbXBvbmVudHMvR29vZ2xlTG9nb3V0QnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQiwrQ0FBMEM7QUFDMUMsbURBQThDO0FBQzlDLHlEQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQ7Ozs7O0dBS0c7QUFDSCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsV0FBcUM7SUFDaEUsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUU7UUFDcEMsT0FBTyxDQUFDLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsYUFBZ0IsQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxDQUNILG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDaEQsb0JBQUMsb0JBQVUsSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLGVBQXNCLENBQzdELENBQ1osQ0FBQztBQUNOLENBQUMsQ0FBQztBQU1GOzs7OztHQUtHO0FBQ0gsNEJBQTRCLEtBQThCO0lBQzlDLElBQUEsaUJBQUksQ0FBVztJQUN2QixPQUFPLENBQ0gsb0JBQUMsY0FBSSxJQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ1YsNkJBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JELG9CQUFDLGlDQUFZLElBQ1QsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQzlCLE1BQU0sRUFBRSxxQkFBcUIsR0FDL0IsQ0FDQSxDQUNILENBQ1YsQ0FBQztBQUNOLENBQUM7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9