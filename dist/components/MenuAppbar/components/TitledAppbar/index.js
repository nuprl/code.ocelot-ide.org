"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = require("@material-ui/core/Typography");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Fade_1 = require("@material-ui/core/Fade");
var Pets_1 = require("@material-ui/icons/Pets");
var styles = function (theme) {
    return {
        flex: {
            flex: 1,
        },
        icon: {
            marginBottom: '0.25em',
            marginRight: theme.spacing.unit * 1.5,
        },
        title: {
            fontFamily: 'Fira Mono, Roboto, Arial, sans-serif',
            fontWeight: 400,
        },
    };
};
var TitledAppbar = function (props) {
    var classes = props.classes, children = props.children, title = props.title;
    return (React.createElement(AppBar_1.default, { position: "absolute" },
        React.createElement(Toolbar_1.default, { variant: "dense" },
            React.createElement(Pets_1.default, { className: classes.icon }),
            React.createElement(Fade_1.default, { in: true, timeout: 700 },
                React.createElement(Typography_1.default, { variant: "subheading", color: "inherit", classes: {
                        subheading: classes.title,
                    }, className: classes.flex, noWrap: true }, title)),
            children)));
};
exports.default = styles_1.withStyles(styles)(TitledAppbar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZW51QXBwYmFyL2NvbXBvbmVudHMvVGl0bGVkQXBwYmFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQixtREFBc0Y7QUFDdEYsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGdEQUE4QztBQUU5QyxJQUFNLE1BQU0sR0FBdUIsVUFBQSxLQUFLO0lBQ3BDLE9BQU87UUFDSCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsQ0FBQztTQUNWO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsWUFBWSxFQUFFLFFBQVE7WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUc7U0FDeEM7UUFDRCxLQUFLLEVBQUU7WUFDSCxVQUFVLEVBQUUsc0NBQXNDO1lBQ2xELFVBQVUsRUFBRSxHQUFHO1NBQ2xCO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQU1GLElBQU0sWUFBWSxHQUFxRSxVQUFDLEtBQUs7SUFDakYsSUFBQSx1QkFBTyxFQUFFLHlCQUFRLEVBQUUsbUJBQUssQ0FBVztJQUMzQyxPQUFPLENBQ0gsb0JBQUMsZ0JBQU0sSUFBQyxRQUFRLEVBQUMsVUFBVTtRQUN2QixvQkFBQyxpQkFBTyxJQUFDLE9BQU8sRUFBQyxPQUFPO1lBQ3BCLG9CQUFDLGNBQU8sSUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBRztZQUNuQyxvQkFBQyxjQUFJLElBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRztnQkFDeEIsb0JBQUMsb0JBQVUsSUFDUCxPQUFPLEVBQUMsWUFBWSxFQUNwQixLQUFLLEVBQUMsU0FBUyxFQUNmLE9BQU8sRUFBRTt3QkFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUs7cUJBQzVCLEVBQ0QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQ3ZCLE1BQU0sVUFFTCxLQUFLLENBQ0csQ0FDVjtZQUNOLFFBQVEsQ0FDSCxDQUNMLENBQ1osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLGtCQUFlLG1CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMifQ==