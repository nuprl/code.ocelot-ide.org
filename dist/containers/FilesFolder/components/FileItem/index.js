"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var Code_1 = require("@material-ui/icons/Code");
var ItemTypography_1 = require("../../../../components/ItemTypography");
var Delete_1 = require("@material-ui/icons/Delete");
var ListItemStyles_1 = require("../../../../components/ListItemStyles");
var IconButton_1 = require("@material-ui/core/IconButton");
var ListItemSecondaryAction_1 = require("@material-ui/core/ListItemSecondaryAction");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
require("static/styles/DrawerIconButton.css");
var FileItem = function (_a) {
    var _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, onSelect = _a.onSelect, onDelete = _a.onDelete, classes = _a.classes, isSaved = _a.isSaved, name = _a.name;
    return (React.createElement(ListItem_1.default, { button: true, disableGutters: true, className: "" + classes.nested, classes: {
            root: "" + (isSelected && classes.selectedHighlight),
            dense: classes.tinyPadding,
        }, onClick: onSelect, dense: true },
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Code_1.default, { className: classes.codeIcon + " " + (isSaved && classes.show) })),
        !isSaved &&
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(CircularProgress_1.default, { size: 24, color: "inherit", thickness: 4, style: { position: 'absolute' }, classes: { svg: classes.loadingIcon + " " + classes.show } })),
        React.createElement(ItemTypography_1.default, { text: name, className: classes.listItemColor, styleBody: true }),
        React.createElement(ListItemSecondaryAction_1.default, { className: "fadeIcon " + classes.listItemColor },
            React.createElement(Tooltip_1.default, { id: "tooltip-icon", title: "Delete" },
                React.createElement("div", null,
                    "  ",
                    React.createElement(IconButton_1.default, { "aria-label": "Delete", color: "inherit", onClick: onDelete },
                        React.createElement(Delete_1.default, { color: "inherit" })))))));
};
exports.default = ListItemStyles_1.default(FileItem);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9jb21wb25lbnRzL0ZpbGVJdGVtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQix1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELGdEQUErQztBQUMvQyx3RUFBdUU7QUFDdkUsb0RBQW1EO0FBQ25ELHdFQUFtRTtBQUduRSwyREFBc0Q7QUFDdEQscUZBQWdGO0FBQ2hGLHFEQUFnRDtBQUNoRCx1RUFBa0U7QUFDbEUsOENBQTRDO0FBWTVDLElBQU0sUUFBUSxHQUFvQyxVQUFDLEVBT2xEO1FBTkcsa0JBQWtCLEVBQWxCLHVDQUFrQixFQUNsQixzQkFBUSxFQUNSLHNCQUFRLEVBQ1Isb0JBQU8sRUFDUCxvQkFBTyxFQUNQLGNBQUk7SUFFSixPQUFPLENBQ0gsb0JBQUMsa0JBQVEsSUFDTCxNQUFNLFFBQ04sY0FBYyxRQUNkLFNBQVMsRUFBRSxLQUFHLE9BQU8sQ0FBQyxNQUFRLEVBQzlCLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxNQUFHLFVBQVUsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUU7WUFDbEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQzdCLEVBQ0QsT0FBTyxFQUFFLFFBQVEsRUFDakIsS0FBSztRQUVMLG9CQUFDLHNCQUFZO1lBQ1Qsb0JBQUMsY0FBUSxJQUNMLFNBQVMsRUFBSyxPQUFPLENBQUMsUUFBUSxVQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFFLEdBQzdELENBQ1M7UUFFWCxDQUFDLE9BQU87WUFDUixvQkFBQyxzQkFBWTtnQkFDVCxvQkFBQywwQkFBZ0IsSUFDYixJQUFJLEVBQUUsRUFBRSxFQUNSLEtBQUssRUFBQyxTQUFTLEVBQ2YsU0FBUyxFQUFFLENBQUMsRUFDWixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQy9CLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBSyxPQUFPLENBQUMsV0FBVyxTQUFJLE9BQU8sQ0FBQyxJQUFNLEVBQUUsR0FDNUQsQ0FDUztRQUduQixvQkFBQyx3QkFBa0IsSUFDZixJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUNoQyxTQUFTLFNBQ1g7UUFDRixvQkFBRSxpQ0FBdUIsSUFBQyxTQUFTLEVBQUUsY0FBWSxPQUFPLENBQUMsYUFBZTtZQUNwRSxvQkFBQyxpQkFBTyxJQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLFFBQVE7Z0JBQ3JDOztvQkFFSSxvQkFBQyxvQkFBVSxrQkFDSSxRQUFRLEVBQ25CLEtBQUssRUFBQyxTQUFTLEVBQ2YsT0FBTyxFQUFFLFFBQVE7d0JBRWpCLG9CQUFDLGdCQUFVLElBQUMsS0FBSyxFQUFDLFNBQVMsR0FBRyxDQUNyQixDQUNYLENBQ0EsQ0FDWSxDQUNuQixDQUNkLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixrQkFBZSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDIn0=