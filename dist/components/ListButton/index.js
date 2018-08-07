"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ItemTypography_1 = require("../ItemTypography");
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return ({
    listItemColor: {
        color: theme.palette.primary.contrastText,
        opacity: 0.85,
    }
}); };
var ListItemButton = function (_a) {
    var icon = _a.icon, text = _a.text, classes = _a.classes;
    return (React.createElement(ListItem_1.default, { button: true },
        React.createElement(ListItemIcon_1.default, { className: classes.listItemColor }, icon),
        React.createElement(ItemTypography_1.default, { text: text, className: classes.listItemColor })));
};
exports.default = styles_1.withStyles(styles)(ListItemButton);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MaXN0QnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQix1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELG9EQUErQztBQUUvQyxtREFBc0Y7QUFFdEYsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN6QyxhQUFhLEVBQUU7UUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWTtRQUN6QyxPQUFPLEVBQUUsSUFBSTtLQUNoQjtDQUNKLENBQUMsRUFMMEMsQ0FLMUMsQ0FBQztBQU9ILElBQU0sY0FBYyxHQUNkLFVBQUMsRUFBdUI7UUFBckIsY0FBSSxFQUFFLGNBQUksRUFBRSxvQkFBTztJQUFPLE9BQUEsQ0FDM0Isb0JBQUMsa0JBQVEsSUFBQyxNQUFNO1FBQ1osb0JBQUMsc0JBQVksSUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFDekMsSUFBSSxDQUNNO1FBQ2Ysb0JBQUMsd0JBQWMsSUFDWCxJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsYUFBYSxHQUNsQyxDQUNLLENBQ2Q7QUFWOEIsQ0FVOUIsQ0FBQztBQUVOLGtCQUFlLG1CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMifQ==