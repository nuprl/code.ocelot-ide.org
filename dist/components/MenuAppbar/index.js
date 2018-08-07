"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UserLogin_1 = require("../../containers/UserLogin");
var TitledAppbar_1 = require("./components/TitledAppbar");
var IconButton_1 = require("@material-ui/core/IconButton");
var ViewQuilt_1 = require("@material-ui/icons/ViewQuilt");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var HistoryButton_1 = require("../../containers/HistoryButton");
function MenuAppbar(props) {
    return (React.createElement(TitledAppbar_1.default, { title: props.title },
        React.createElement(HistoryButton_1.default, null),
        React.createElement(Tooltip_1.default, { title: "Layout" },
            React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "Layout" },
                React.createElement(ViewQuilt_1.default, null))),
        React.createElement("div", { style: { display: 'inline-block', width: '0.5em' } }),
        React.createElement(UserLogin_1.default, null)));
}
exports.default = MenuAppbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZW51QXBwYmFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQix3REFBbUQ7QUFDbkQsMERBQXFEO0FBQ3JELDJEQUFzRDtBQUN0RCwwREFBc0Q7QUFDdEQscURBQWdEO0FBQ2hELGdFQUEyRDtBQU0zRCxvQkFBbUMsS0FBc0I7SUFDckQsT0FBTyxDQUNILG9CQUFDLHNCQUFZLElBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1FBQzVCLG9CQUFDLHVCQUFhLE9BQUc7UUFFakIsb0JBQUMsaUJBQU8sSUFBQyxLQUFLLEVBQUMsUUFBUTtZQUNuQixvQkFBQyxvQkFBVSxJQUFDLEtBQUssRUFBQyxTQUFTLGdCQUFZLFFBQVE7Z0JBQzNDLG9CQUFDLG1CQUFVLE9BQUcsQ0FDTCxDQUNQO1FBQ1YsNkJBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUk7UUFDM0Qsb0JBQUMsbUJBQVMsT0FBRyxDQUNGLENBQ2xCLENBQUM7QUFDTixDQUFDO0FBZEQsNkJBY0MifQ==