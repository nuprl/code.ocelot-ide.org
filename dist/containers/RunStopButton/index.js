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
var Button_1 = require("@material-ui/core/Button");
var red_1 = require("@material-ui/core/colors/red");
var styles_1 = require("@material-ui/core/styles");
var actions_1 = require("../../store/codeEditor/actions");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../store/userFiles/selectors");
var PlayArrow_1 = require("@material-ui/icons/PlayArrow");
var Stop_1 = require("@material-ui/icons/Stop");
var elementaryJS = require("elementary-js");
var stopify = require("stopify");
// TODO(arjun): I think these hacks are necessary for eval to work. We either 
// do them here or we do them within the implementation of Stopify. I want 
// them here for now until I'm certain there isn't a cleaner way.
var elementaryRTS = require("elementary-js/dist/runtime");
window.stopify = stopify;
window.elementaryjs = elementaryRTS;
var styles = function (theme) { return ({
    button: {
        margin: theme.spacing.unit * 0.5,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
}); };
var tempTheme = styles_1.createMuiTheme({
    palette: {
        primary: red_1.default,
    }
});
var RunStopButton = /** @class */ (function (_super) {
    __extends(RunStopButton, _super);
    function RunStopButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleStopifyResult = function (result) {
            if (result.type === 'exception') {
                // tslint:disable-next-line:no-console
                console.error(result.value, result.stack[0]);
            }
        };
        _this.onRun = function () {
            var compiled = elementaryJS.compile(_this.props.code, true);
            if (compiled.kind === 'error') {
                for (var _i = 0, _a = compiled.errors; _i < _a.length; _i++) {
                    var err = _a[_i];
                    console.error("Line " + err.location.start.line + ": " + err.message);
                }
                return;
            }
            try {
                var runner = stopify.stopifyLocallyFromAst(compiled.node, undefined, // TODO(arjun): will need to specify for error locs.
                {
                    externals: [
                        'elementaryjs',
                        'console',
                        'lib220'
                    ]
                }, {
                // estimator: 'countdown',
                // yieldInterval: 1
                });
                _this.props.setRunnerToState(runner);
                window.lib220.setRunner(runner);
                runner.run(function (result) {
                    // tslint:disable-next-line:no-console
                    // console.log(result);
                    _this.handleStopifyResult(result);
                    _this.props.removeRunnerFromState();
                });
            }
            catch (e) {
                // tslint:disable-next-line:no-console
                console.error(e);
            }
        };
        _this.onStop = function () {
            if (typeof _this.props.codeRunner === 'undefined') {
                return;
            }
            _this.props.codeRunner.pause(function (line) {
                // tslint:disable-next-line:no-console
                console.log('stopped');
                _this.props.removeRunnerFromState();
            });
        };
        return _this;
    }
    RunStopButton.prototype.render = function () {
        var _a = this.props, classes = _a.classes, codeRunner = _a.codeRunner, enabled = _a.enabled;
        var runnerExists = codeRunner === undefined;
        return (React.createElement("div", { style: { display: 'inline-block', width: '108px' } },
            React.createElement(Button_1.default, { style: runnerExists ? {} : { display: 'none' }, color: "secondary", className: classes.button, onClick: this.onRun, disabled: !enabled },
                React.createElement(PlayArrow_1.default, { color: "inherit", className: classes.leftIcon }),
                "Run"),
            React.createElement(styles_1.MuiThemeProvider, { theme: tempTheme },
                React.createElement(Button_1.default, { style: runnerExists ? { display: 'none' } : {}, color: "primary", className: classes.button, onClick: this.onStop },
                    React.createElement(Stop_1.default, { color: "inherit", className: classes.leftIcon }),
                    "Stop"))));
    };
    return RunStopButton;
}(React.Component));
var mapStateToProps = function (state) { return ({
    codeRunner: state.codeEditor.codeRunner,
    code: selectors_1.getSelectedCode(state),
    enabled: typeof state.codeEditor.testRunner === 'undefined'
}); };
var mapDispatchToProps = function (dispatch) { return ({
    setRunnerToState: function (runner) { dispatch(actions_1.setCodeRunner(runner)); },
    removeRunnerFromState: function () { dispatch(actions_1.removeCodeRunner()); }
}); };
var styling = styles_1.withStyles(styles);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styling(RunStopButton));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9SdW5TdG9wQnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsbURBQThDO0FBQzlDLG9EQUErQztBQUMvQyxtREFBd0g7QUFHeEgsMERBQWlGO0FBQ2pGLDJDQUFzQztBQUN0Qyw2REFBa0U7QUFDbEUsMERBQW9EO0FBQ3BELGdEQUErQztBQUUvQyw0Q0FBOEM7QUFDOUMsaUNBQW1DO0FBRW5DLDhFQUE4RTtBQUM5RSwyRUFBMkU7QUFDM0UsaUVBQWlFO0FBQ2pFLDBEQUE0RDtBQUMzRCxNQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxNQUFjLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztBQUU3QyxJQUFNLE1BQU0sR0FBdUIsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ3pDLE1BQU0sRUFBRTtRQUNKLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtLQUNsQztDQUNKLENBQUMsRUFQMEMsQ0FPMUMsQ0FBQztBQUVILElBQU0sU0FBUyxHQUFHLHVCQUFjLENBQUM7SUFDN0IsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLGFBQUc7S0FDZjtDQUNKLENBQUMsQ0FBQztBQVVIO0lBQTRCLGlDQUFzQjtJQUFsRDtRQUFBLHFFQTJGQztRQXpGRyx5QkFBbUIsR0FBRyxVQUFDLE1BQXNCO1lBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQzdCLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxD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