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
var React = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var Fade_1 = require("@material-ui/core/Fade");
var Hidden_1 = require("@material-ui/core/Hidden");
var styles = function (theme) { return ({
    emailText: {
        paddingRight: theme.spacing.unit,
    }
}); };
function EmailText(props) {
    var classes = props.classes, show = props.show, email = props.email;
    return (React.createElement(Hidden_1.default, { xsDown: true },
        React.createElement(Fade_1.default, __assign({ in: show }, (show ? { timeout: 500 } : {})),
            React.createElement("div", { className: classes.emailText, style: { display: (show ? 'inline-block' : 'none') } },
                React.createElement(Typography_1.default, { variant: "subheading", color: "inherit" }, email)))));
}
exports.default = styles_1.withStyles(styles)(EmailText);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxUZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lcnMvVXNlckxvZ2luL2NvbXBvbmVudHMvRW1haWxUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCxtREFBc0Y7QUFDdEYsK0NBQTBDO0FBQzFDLG1EQUE4QztBQUU5QyxJQUFNLE1BQU0sR0FBdUIsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ3pDLFNBQVMsRUFBRTtRQUNQLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7S0FDbkM7Q0FDSixDQUFDLEVBSjBDLENBSTFDLENBQUM7QUFPSCxtQkFBbUIsS0FBK0M7SUFDdEQsSUFBQSx1QkFBTyxFQUFFLGlCQUFJLEVBQUUsbUJBQUssQ0FBVztJQUN2QyxPQUFPLENBQ0gsb0JBQUMsZ0JBQU0sSUFBQyxNQUFNO1FBQ1Ysb0JBQUMsY0FBSSxhQUFDLEVBQUUsRUFBRSxJQUFJLElBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUMsNkJBQ0ksU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQzVCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFcEQsb0JBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxTQUFTLElBQzNDLEtBQUssQ0FDRyxDQUNYLENBQ0gsQ0FDRixDQUNaLENBQUM7QUFDTixDQUFDO0FBRUQsa0JBQWUsbUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyJ9