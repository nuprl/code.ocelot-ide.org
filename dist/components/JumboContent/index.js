"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_split_pane_1 = require("react-split-pane");
var CanvasOutput_1 = require("../CanvasOutput");
var OutputPanel_1 = require("../../containers/OutputPanel");
var EditorSuite_1 = require("../EditorSuite");
require("static/styles/SplitPane.css");
var JumboContent = function () { return (React.createElement(react_split_pane_1.default, { split: "horizontal", minSize: 48, defaultSize: "25%", primary: "second" },
    React.createElement(react_split_pane_1.default, { split: "vertical", defaultSize: "50%", minSize: 0, pane1Style: { maxWidth: '100%' } },
        React.createElement(EditorSuite_1.default, null),
        React.createElement(CanvasOutput_1.default, null)),
    React.createElement(OutputPanel_1.default, null))); };
exports.default = JumboContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9KdW1ib0NvbnRlbnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBQy9CLHFEQUF5QztBQUN6QyxnREFBMkM7QUFDM0MsNERBQXVEO0FBQ3ZELDhDQUF5QztBQUN6Qyx1Q0FBcUM7QUFFckMsSUFBTSxZQUFZLEdBQTZCLGNBQU0sT0FBQSxDQUNqRCxvQkFBQywwQkFBUyxJQUNOLEtBQUssRUFBQyxZQUFZLEVBQ2xCLE9BQU8sRUFBRSxFQUFFLEVBQ1gsV0FBVyxFQUFDLEtBQUssRUFDakIsT0FBTyxFQUFDLFFBQVE7SUFFaEIsb0JBQUMsMEJBQVMsSUFDTixLQUFLLEVBQUMsVUFBVSxFQUNoQixXQUFXLEVBQUMsS0FBSyxFQUNqQixPQUFPLEVBQUUsQ0FBQyxFQUNWLFVBQVUsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUM7UUFFOUIsb0JBQUMscUJBQVcsT0FBRztRQUNmLG9CQUFDLHNCQUFZLE9BQUcsQ0FDUjtJQUNaLG9CQUFDLHFCQUFXLE9BQUcsQ0FDUCxDQUNmLEVBbEJvRCxDQWtCcEQsQ0FBQztBQUVGLGtCQUFlLFlBQVksQ0FBQyJ9