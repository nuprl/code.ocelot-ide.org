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
var console_feed_1 = require("console-feed");
var consoleStyle_1 = require("../../../../static/styles/consoleStyle");
require("static/styles/Scrollbar.css");
var ConsoleOutput = /** @class */ (function (_super) {
    __extends(ConsoleOutput, _super);
    function ConsoleOutput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logRef = null;
        return _this;
    }
    ConsoleOutput.prototype.componentDidUpdate = function () {
        if (this.logRef !== null) {
            this.logRef.scrollTop = this.logRef.scrollHeight;
        }
    };
    ConsoleOutput.prototype.render = function () {
        var _this = this;
        var logs = this.props.logs;
        return (React.createElement("div", { className: "scrollbars", style: { backgroundColor: '#242424', overflowY: 'auto', overflowX: 'hidden', flexGrow: 1 }, ref: function (divElem) { return _this.logRef = divElem; } },
            React.createElement(console_feed_1.Console, { logs: logs, variant: "dark", styles: consoleStyle_1.inspectorTheme })));
    };
    return ConsoleOutput;
}(React.Component));
exports.default = ConsoleOutput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9PdXRwdXRQYW5lbC9jb21wb25lbnRzL0NvbnNvbGVPdXRwdXQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQiw2Q0FBdUM7QUFDdkMsdUVBQXdFO0FBQ3hFLHVDQUFxQztBQVNyQztJQUE0QixpQ0FBc0I7SUFBbEQ7UUFBQSxxRUE2QkM7UUE1QkMsWUFBTSxHQUEwQixJQUFJLENBQUM7O0lBNEJ2QyxDQUFDO0lBMUJDLDBDQUFrQixHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQWtCQztRQWpCUyxJQUFBLHNCQUFJLENBQWdCO1FBRTVCLE9BQU8sQ0FDTCw2QkFDRSxTQUFTLEVBQUMsWUFBWSxFQUN0QixLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQzFGLEdBQUcsRUFBRSxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFyQixDQUFxQjtZQUd2QyxvQkFBQyxzQkFBTyxJQUNOLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFDLE1BQU0sRUFDZCxNQUFNLEVBQUUsNkJBQWMsR0FDdEIsQ0FFRSxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBN0JELENBQTRCLEtBQUssQ0FBQyxTQUFTLEdBNkIxQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9