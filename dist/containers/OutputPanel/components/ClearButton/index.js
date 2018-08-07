"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IconButton_1 = require("@material-ui/core/IconButton");
var ClearAll_1 = require("@material-ui/icons/ClearAll");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var core_1 = require("@material-ui/core");
var styles = function (theme) { return ({
    button: {
        marginRight: theme.spacing.unit,
    }
}); };
var ClearButton = function (_a) {
    var onClick = _a.onClick, classes = _a.classes;
    return (React.createElement(Tooltip_1.default, { id: "tooltip-icon", title: "Clear", placement: "top" },
        React.createElement(IconButton_1.default, { "aria-label": "Clear", color: "inherit", onClick: onClick, className: classes.button },
            React.createElement(ClearAll_1.default, { color: "inherit" }))));
};
exports.default = core_1.withStyles(styles)(ClearButton);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9PdXRwdXRQYW5lbC9jb21wb25lbnRzL0NsZWFyQnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsd0RBQW9EO0FBQ3BELHFEQUFnRDtBQUNoRCwwQ0FBK0U7QUFFL0UsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN6QyxNQUFNLEVBQUU7UUFDSixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0tBQ2xDO0NBQ0osQ0FBQyxFQUowQyxDQUkxQyxDQUFDO0FBTUgsSUFBTSxXQUFXLEdBQ1gsVUFBQyxFQUFvQjtRQUFsQixvQkFBTyxFQUFFLG9CQUFPO0lBQU8sT0FBQSxDQUN4QixvQkFBQyxpQkFBTyxJQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsS0FBSztRQUNwRCxvQkFBQyxvQkFBVSxrQkFDSSxPQUFPLEVBQ2xCLEtBQUssRUFBQyxTQUFTLEVBQ2YsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBRXpCLG9CQUFDLGtCQUFTLElBQUMsS0FBSyxFQUFDLFNBQVMsR0FBRyxDQUNwQixDQUNQLENBQ2I7QUFYMkIsQ0FXM0IsQ0FBQztBQUVOLGtCQUFlLGlCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMifQ==