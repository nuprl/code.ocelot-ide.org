"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Typography_1 = require("@material-ui/core/Typography");
var ItemTypography = function (_a) {
    var text = _a.text, className = _a.className, _b = _a.styleBody, styleBody = _b === void 0 ? false : _b;
    return (React.createElement(ListItemText_1.default, { disableTypography: true, primary: React.createElement(Typography_1.default, { variant: styleBody ? 'body1' : 'subheading', className: className }, text), classes: { root: className } }));
};
exports.default = ItemTypography;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JdGVtVHlwb2dyYXBoeS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFDL0IsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUl0RCxJQUFNLGNBQWMsR0FBb0MsVUFBQyxFQUVwRDtRQURBLGNBQUksRUFBRSx3QkFBUyxFQUFFLGlCQUFpQixFQUFqQixzQ0FBaUI7SUFDN0IsT0FBQSxDQUNOLG9CQUFDLHNCQUFZLElBQ1QsaUJBQWlCLFFBQ2pCLE9BQU8sRUFDSCxvQkFBQyxvQkFBVSxJQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLElBQ3hFLElBQUksQ0FDSSxFQUNqQixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQzlCLENBQ0w7QUFUUyxDQVNULENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==