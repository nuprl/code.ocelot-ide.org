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
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var Collapse_1 = require("@material-ui/core/Collapse");
var ItemTypography_1 = require("../../../../components/ItemTypography");
var IconButton_1 = require("@material-ui/core/IconButton");
var ListItemSecondaryAction_1 = require("@material-ui/core/ListItemSecondaryAction");
var Tooltip_1 = require("@material-ui/core/Tooltip");
require("static/styles/DrawerIconButton.css");
var UserFiles_1 = require("../UserFiles");
require("static/styles/DrawerIconButton.css");
var LoadingFolderIcon_1 = require("../LoadingFolderIcon");
var ListItemStyles_1 = require("../../../../components/ListItemStyles");
var Add_1 = require("@material-ui/icons/Add");
var FilesFolder = /** @class */ (function (_super) {
    __extends(FilesFolder, _super);
    function FilesFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesFolder.prototype.render = function () {
        var _a = this.props, open = _a.open, disabled = _a.disabled, onCreateFile = _a.onCreateFile, toggleFolder = _a.toggleFolder, classes = _a.classes;
        return (React.createElement("div", null,
            React.createElement("div", { className: "fileItem" },
                React.createElement(ListItem_1.default, { button: true, onClick: toggleFolder, disabled: disabled, dense: true, classes: { dense: classes.tinyPadding } },
                    React.createElement(LoadingFolderIcon_1.default, { loading: disabled, className: classes.listItemColor }),
                    React.createElement(ItemTypography_1.default, { text: "Files", className: classes.listItemColor }),
                    React.createElement(ListItemSecondaryAction_1.default, { className: "fadeIcon " + classes.listItemColor },
                        React.createElement(Tooltip_1.default, { id: "tooltip-icon", title: "New File", disableHoverListener: disabled },
                            React.createElement("div", null,
                                "  ",
                                React.createElement(IconButton_1.default, { "aria-label": "New File", color: "inherit", disabled: disabled, onClick: onCreateFile },
                                    React.createElement(Add_1.default, { color: "inherit" }))))))),
            React.createElement(Collapse_1.default, { in: open, timeout: "auto" },
                React.createElement(List_1.default, { component: "div", disablePadding: true, dense: true },
                    React.createElement(UserFiles_1.default, null)))));
    };
    return FilesFolder;
}(React.Component));
exports.default = ListItemStyles_1.default(FilesFolder);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9jb21wb25lbnRzL0ZpbGVzRm9sZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsK0NBQTBDO0FBQzFDLHVEQUFrRDtBQUNsRCx1REFBa0Q7QUFDbEQsd0VBQW1FO0FBQ25FLDJEQUFzRDtBQUN0RCxxRkFBZ0Y7QUFDaEYscURBQWdEO0FBQ2hELDhDQUE0QztBQUM1QywwQ0FBcUM7QUFDckMsOENBQTRDO0FBQzVDLDBEQUFxRDtBQUNyRCx3RUFBbUU7QUFHbkUsOENBQTZDO0FBVzdDO0lBQTBCLCtCQUFzQjtJQUFoRDs7SUFnREEsQ0FBQztJQTlDRyw0QkFBTSxHQUFOO1FBQ1UsSUFBQSxlQUFvRSxFQUFsRSxjQUFJLEVBQUUsc0JBQVEsRUFBRSw4QkFBWSxFQUFFLDhCQUFZLEVBQUUsb0JBQU8sQ0FBZ0I7UUFFM0UsT0FBTyxDQUNIO1lBQ0ksNkJBQUssU0FBUyxFQUFDLFVBQVU7Z0JBQ3JCLG9CQUFDLGtCQUFRLElBQ0wsTUFBTSxRQUNOLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEtBQUssUUFDTCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFFdkMsb0JBQUMsMkJBQWlCLElBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsR0FBSTtvQkFDMUUsb0JBQUMsd0JBQWMsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsYUFBYSxHQUFJO29CQUVqRSxvQkFBRSxpQ0FBdUIsSUFBQyxTQUFTLEVBQUUsY0FBWSxPQUFPLENBQUMsYUFBZTt3QkFDcEUsb0JBQUMsaUJBQU8sSUFBQyxFQUFFLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUUsUUFBUTs0QkFDdEU7O2dDQUVJLG9CQUFDLG9CQUFVLGtCQUNJLFVBQVUsRUFDckIsS0FBSyxFQUFDLFNBQVMsRUFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsWUFBWTtvQ0FFckIsb0JBQUMsYUFBTyxJQUFDLEtBQUssRUFBQyxTQUFTLEdBQUcsQ0FDbEIsQ0FDWCxDQUNBLENBQ1ksQ0FFbkIsQ0FDVDtZQUNOLG9CQUFDLGtCQUFRLElBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBTTtnQkFDOUIsb0JBQUMsY0FBSSxJQUNELFNBQVMsRUFBQyxLQUFLLEVBQ2YsY0FBYyxRQUNkLEtBQUs7b0JBRUwsb0JBQUMsbUJBQVMsT0FBRyxDQUNWLENBQ0EsQ0FDVCxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBaERELENBQTBCLEtBQUssQ0FBQyxTQUFTLEdBZ0R4QztBQUNELGtCQUFlLHdCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMifQ==