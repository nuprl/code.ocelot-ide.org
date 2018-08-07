"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Drawer_1 = require("@material-ui/core/Drawer");
var List_1 = require("@material-ui/core/List");
var styles_1 = require("@material-ui/core/styles");
var ListButton_1 = require("../ListButton");
var StarBorder_1 = require("@material-ui/icons/StarBorder");
var FilesFolder_1 = require("../../containers/FilesFolder");
var styles = function (theme) { return ({
    drawerPaper: {
        position: 'relative',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        overflow: 'hidden'
    },
    toolbar: theme.mixins.toolbar,
    noBorder: {
        borderRight: 'none'
    }
}); };
var SideDrawer = function (_a) {
    var classes = _a.classes;
    return (React.createElement(Drawer_1.default, { variant: "permanent", anchor: "left", classes: {
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.noBorder
        } },
        React.createElement("div", { className: classes.toolbar, style: { minHeight: '48px' } }),
        React.createElement(List_1.default, { dense: true },
            React.createElement(FilesFolder_1.default, null)),
        React.createElement(List_1.default, { dense: true },
            React.createElement(ListButton_1.default, { icon: React.createElement(StarBorder_1.default, null), text: "CS 220" }))));
};
exports.default = styles_1.withStyles(styles)(SideDrawer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaWRlRHJhd2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQixtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLG1EQUFzRjtBQUN0Riw0Q0FBdUM7QUFDdkMsNERBQTJEO0FBQzNELDREQUF1RDtBQUV2RCxJQUFNLE1BQU0sR0FBdUIsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ3pDLFdBQVcsRUFBRTtRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxNQUFNO1FBQ2IsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUk7UUFDM0MsUUFBUSxFQUFFLFFBQVE7S0FDckI7SUFDRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO0lBQzdCLFFBQVEsRUFBRTtRQUNOLFdBQVcsRUFBRSxNQUFNO0tBQ3RCO0NBQ0osQ0FBQyxFQVgwQyxDQVcxQyxDQUFDO0FBSUgsSUFBTSxVQUFVLEdBQWlELFVBQzdELEVBQVc7UUFBVCxvQkFBTztJQUNSLE9BQUEsQ0FDRyxvQkFBQyxnQkFBTSxJQUNILE9BQU8sRUFBQyxXQUFXLEVBQ25CLE1BQU0sRUFBQyxNQUFNLEVBQ2IsT0FBTyxFQUFFO1lBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQzFCLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzFDO1FBRUQsNkJBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxHQUFHO1FBRTlELG9CQUFDLGNBQUksSUFBQyxLQUFLO1lBQ1Asb0JBQUMscUJBQVcsT0FBRyxDQUNaO1FBQ1Asb0JBQUMsY0FBSSxJQUFDLEtBQUs7WUFDUCxvQkFBQyxvQkFBVSxJQUNQLElBQUksRUFBRSxvQkFBQyxvQkFBYyxPQUFHLEVBQ3hCLElBQUksRUFBQyxRQUFRLEdBQ2YsQ0FDQyxDQUNGLENBQ1o7QUFyQkEsQ0FxQkEsQ0FBQztBQUVOLGtCQUFlLG1CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMifQ==