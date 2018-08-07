"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var Folder_1 = require("@material-ui/icons/Folder");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var LoadingFolderIcon = function (_a) {
    var loading = _a.loading, className = _a.className;
    return (React.createElement(ListItemIcon_1.default, null, loading
        ? React.createElement(CircularProgress_1.default, { className: "" + className, 
            // Does classes.progress do anything? ${classes.progress} 
            size: 24, thickness: 4 })
        : React.createElement(Folder_1.default, { className: className })));
};
exports.default = LoadingFolderIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9GaWxlc0ZvbGRlci9jb21wb25lbnRzL0xvYWRpbmdGb2xkZXJJY29uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQiwrREFBMEQ7QUFDMUQsb0RBQW1EO0FBQ25ELHVFQUFrRTtBQUlsRSxJQUFNLGlCQUFpQixHQUNqQixVQUFDLEVBQXNCO1FBQXBCLG9CQUFPLEVBQUUsd0JBQVM7SUFBTyxPQUFBLENBQzFCLG9CQUFDLHNCQUFZLFFBQ1IsT0FBTztRQUNKLENBQUMsQ0FBQyxvQkFBQywwQkFBZ0IsSUFDZixTQUFTLEVBQUUsS0FBRyxTQUFXO1lBQ3pCLDBEQUEwRDtZQUMxRCxJQUFJLEVBQUUsRUFBRSxFQUNSLFNBQVMsRUFBRSxDQUFDLEdBQ2Q7UUFDRixDQUFDLENBQUMsb0JBQUMsZ0JBQVUsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQy9CLENBQ2xCO0FBWDZCLENBVzdCLENBQUM7QUFFTixrQkFBZSxpQkFBaUIsQ0FBQyJ9