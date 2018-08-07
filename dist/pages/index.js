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
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var CustomTheme_1 = require("../components/CustomTheme");
var MenuAppbar_1 = require("../components/MenuAppbar");
var SideDrawer_1 = require("../components/SideDrawer");
var react_split_pane_1 = require("react-split-pane");
var Notification_1 = require("../containers/Notification");
var JumboContent_1 = require("../components/JumboContent");
var detect_browser_1 = require("detect-browser");
require("static/styles/JumboContent.css");
require("static/styles/body.css");
var Typography_1 = require("@material-ui/core/Typography");
var styles = function (theme) {
    return {
        root: {
            flexGrow: 1,
            height: '100vh',
            width: '100vw',
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            backgroundColor: theme.palette.primary.main,
        },
        jumboContainer: {
            display: 'flex',
            flexFlow: 'column',
            height: '100%',
        },
        jumboContent: {
            position: 'relative',
            height: '100%',
            flex: '1 1 auto',
        },
        toolbar: __assign({}, theme.mixins.toolbar, { flex: '0 1 auto' }),
    };
};
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.render = function () {
        var browser = detect_browser_1.detect();
        switch (browser && browser.name) { // kind of janky with a swtich statement but okay
            case 'chrome':
            case 'firefox':
            case 'safari':
                var classes = this.props.classes;
                return (React.createElement("div", { className: classes.root },
                    React.createElement(Notification_1.default, null),
                    React.createElement(MenuAppbar_1.default, { title: "Ocelot" }),
                    React.createElement(react_split_pane_1.default, { split: "vertical", defaultSize: 250, minSize: 0 },
                        React.createElement(SideDrawer_1.default, null),
                        React.createElement("div", { className: classes.jumboContainer },
                            React.createElement("div", { className: classes.toolbar, style: { minHeight: '48px' } }),
                            React.createElement("div", { className: classes.jumboContent },
                                React.createElement(JumboContent_1.default, null))))));
            default:
                return (React.createElement(Typography_1.default, { variant: "display1", align: "center" }, "Lol, go use chrome, firefox or safari"));
        }
    };
    return Index;
}(React.Component));
exports.default = CustomTheme_1.default(withStyles_1.default(styles)(Index));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLGtFQUFrRztBQUNsRyx5REFBb0Q7QUFDcEQsdURBQWtEO0FBQ2xELHVEQUFrRDtBQUNsRCxxREFBeUM7QUFDekMsMkRBQXNEO0FBQ3RELDJEQUFzRDtBQUN0RCxpREFBd0M7QUFDeEMsMENBQXdDO0FBQ3hDLGtDQUFnQztBQUNoQywyREFBc0Q7QUFHdEQsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSztJQUN0QyxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFLENBQUM7WUFDWCxNQUFNLEVBQUUsT0FBTztZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsTUFBTTtZQUNmLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1NBQzVDO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNELE9BQU8sZUFDRixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFDdkIsSUFBSSxFQUFFLFVBQVUsR0FDakI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUUY7SUFBb0IseUJBQThDO0lBQWxFOztJQXFDQSxDQUFDO0lBbkNDLHNCQUFNLEdBQU47UUFDRSxJQUFNLE9BQU8sR0FBRyx1QkFBTSxFQUFFLENBQUM7UUFDekIsUUFBUSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLGlEQUFpRDtZQUNsRixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxRQUFRO2dCQUNILElBQUEsNEJBQU8sQ0FBZ0I7Z0JBQy9CLE9BQU8sQ0FDTCw2QkFBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQzFCLG9CQUFDLHNCQUFZLE9BQUc7b0JBQ2hCLG9CQUFDLG9CQUFVLElBQUMsS0FBSyxFQUFDLFFBQVEsR0FBRztvQkFDN0Isb0JBQUMsMEJBQVMsSUFDUixLQUFLLEVBQUMsVUFBVSxFQUNoQixXQUFXLEVBQUUsR0FBRyxFQUNoQixPQUFPLEVBQUUsQ0FBQzt3QkFFVixvQkFBQyxvQkFBVSxPQUFHO3dCQUNkLDZCQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsY0FBYzs0QkFDcEMsNkJBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxHQUFHOzRCQUU5RCw2QkFBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLFlBQVk7Z0NBQ2xDLG9CQUFDLHNCQUFZLE9BQUcsQ0FDWixDQUNGLENBQ0ksQ0FDUixDQUNQLENBQUM7WUFDSjtnQkFDRSxPQUFPLENBQ0wsb0JBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxRQUFRLDRDQUVoQyxDQUNkLENBQUM7U0FDTDtJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFvQixLQUFLLENBQUMsU0FBUyxHQXFDbEM7QUFFRCxrQkFBZSxxQkFBVyxDQUFDLG9CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyJ9