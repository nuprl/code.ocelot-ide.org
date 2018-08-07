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
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var ConsoleInput_1 = require("./components/ConsoleInput");
var ConsoleOutput_1 = require("./components/ConsoleOutput");
var console_feed_1 = require("console-feed");
require("static/styles/ConsoleTabs.css");
var ClearButton_1 = require("./components/ClearButton");
var styles = function (theme) { return ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
        height: '100%',
        width: '100%'
    },
}); };
var EmptyDiv = function () { return (React.createElement("div", { style: { flex: 1 } })); };
/**
 * OutputPanel component responsible for
 * console output and console input
 * It also has a clear logs button
 * The state is stored here. Maybe I'll
 * move the state to redux.
 *
 * @class OutputPanel
 * @extends {React.Component<Props, State>}
 */
var OutputPanel = /** @class */ (function (_super) {
    __extends(OutputPanel, _super);
    function OutputPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.addNewLog = function (decodedLog) {
            _this.setState(function (prevState) { return ({ logs: prevState.logs.concat([decodedLog]) }); });
        };
        _this.clearLogs = function () {
            _this.setState({ logs: [] });
            console.clear();
        };
        _this.addNewCommandResult = function (command, result, isError) {
            var commandLog = { method: 'command', data: [command] };
            var resultLog = { method: isError ? 'error' : 'result', data: [result] };
            _this.setState(function (prevState) { return ({
                logs: prevState.logs.concat([commandLog, resultLog])
            }); });
        };
        _this.state = {
            logs: []
        };
        return _this;
    }
    OutputPanel.prototype.componentDidMount = function () {
        var _this = this;
        console_feed_1.Hook(window.console, function (log) {
            var decodedLog = console_feed_1.Decode(log);
            if (typeof decodedLog.data !== 'object') {
                _this.addNewLog({ data: ['Console was cleared'], method: 'info' });
                return;
            }
            if (decodedLog.data.length === 0) { // prevent console.log() from logging
                return;
            }
            _this.addNewLog(decodedLog);
        });
    };
    OutputPanel.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.root },
            React.createElement(AppBar_1.default, { position: "static", id: "tabs" },
                React.createElement(Tabs_1.default, { value: 0 },
                    React.createElement(Tab_1.default, { label: "Console" }),
                    React.createElement(EmptyDiv, null),
                    React.createElement(ClearButton_1.default, { onClick: this.clearLogs }))),
            React.createElement("div", { style: { height: 'calc(100% - 48px)', flexDirection: 'column', display: 'flex' } },
                React.createElement(ConsoleOutput_1.default, { logs: this.state.logs }),
                React.createElement(ConsoleInput_1.default, { onOutput: this.addNewCommandResult }))));
    };
    return OutputPanel;
}(React.Component));
exports.default = styles_1.withStyles(styles)(OutputPanel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9PdXRwdXRQYW5lbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLG1EQUFzRjtBQUN0RixtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywwREFBcUQ7QUFDckQsNERBQXVEO0FBQ3ZELDZDQUE0QztBQUM1Qyx5Q0FBdUM7QUFDdkMsd0RBQW1EO0FBSW5ELElBQU0sTUFBTSxHQUF1QixVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLENBQUM7UUFDWCxlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSztRQUM1QyxNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxNQUFNO0tBQ2hCO0NBQ0osQ0FBQyxFQVAwQyxDQU8xQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQTZCLGNBQU0sT0FBQSxDQUM3Qyw2QkFBSyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUksQ0FDOUIsRUFGZ0QsQ0FFaEQsQ0FBQztBQU9GOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQTBCLCtCQUE2QjtJQUVuRCxxQkFBWSxLQUFZO1FBQXhCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFnQkQsZUFBUyxHQUFHLFVBQUMsVUFBbUI7WUFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLENBQUMsRUFBRSxJQUFJLEVBQU0sU0FBUyxDQUFDLElBQUksU0FBRSxVQUFVLEVBQUMsRUFBRSxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUM7UUFFRixlQUFTLEdBQUc7WUFDUixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVB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