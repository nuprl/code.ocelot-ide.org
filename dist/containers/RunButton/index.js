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
var apiHelpers_1 = require("../../utils/api/apiHelpers");
var saveHistory_1 = require("../../utils/api/saveHistory");
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
var RunButton = /** @class */ (function (_super) {
    __extends(RunButton, _super);
    function RunButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleStopifyResult = function (result) {
            if (result.type === 'exception') {
                // tslint:disable-next-line:no-console
                console.error(result.value, result.stack[0]);
            }
        };
        _this.onRun = function () {
            if (_this.props.loggedIn) {
                saveHistory_1.saveHistory(_this.props.fileName, _this.props.code).then(function (res) {
                    // tslint:disable-next-line:no-console
                    if (apiHelpers_1.isFailureResponse(res)) {
                        // tslint:disable-next-line:no-console
                        console.log('Something went wrong');
                        // tslint:disable-next-line:no-console
                        console.log(res.data.message);
                        return;
                    }
                    // tslint:disable-next-line:no-console
                    console.log('History saved');
                }).catch(function (err) { return console.log(err); }); // will do for now
            }
            var compiled = elementaryJS.compile(_this.props.code, true);
            if (compiled.kind === 'error') {
                for (var _i = 0, _a = compiled.errors; _i < _a.length; _i++) {
                    var err = _a[_i];
                    console.error("Line " + err.location.start.line + ": " + err.message);
                }
                return;
            }
            if (window.location.hostname === 'localhost') {
                window.localStorage.setItem('code', _this.props.code);
            }
            try {
                var runner = stopify.stopifyLocally(_this.props.code, 
                // undefined, // TODO(arjun): will need to specify for error locs.
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
    RunButton.prototype.render = function () {
        var _a = this.props, classes = _a.classes, codeRunner = _a.codeRunner, enabled = _a.enabled;
        var runnerExists = codeRunner !== undefined;
        var currentButton = (React.createElement(Button_1.default, { color: "secondary", className: classes.button, onClick: this.onRun, disabled: !enabled },
            React.createElement(PlayArrow_1.default, { color: "inherit", className: classes.leftIcon }),
            "Run"));
        if (runnerExists) {
            currentButton = (React.createElement(styles_1.MuiThemeProvider, { theme: tempTheme },
                React.createElement(Button_1.default, { color: "primary", className: classes.button, onClick: this.onStop },
                    React.createElement(Stop_1.default, { color: "inherit", className: classes.leftIcon }),
                    "Stop")));
        }
        return (React.createElement("div", { style: { display: 'inline-block', width: '108px' } }, currentButton));
    };
    return RunButton;
}(React.Component));
var mapStateToProps = function (state) { return ({
    codeRunner: state.codeEditor.codeRunner,
    code: selectors_1.getSelectedCode(state),
    enabled: typeof state.codeEditor.testRunner === 'undefined',
    fileName: selectors_1.getSelectedFileName(state),
    loggedIn: state.userLogin.loggedIn
}); };
var mapDispatchToProps = function (dispatch) { return ({
    setRunnerToState: function (runner) { dispatch(actions_1.setCodeRunner(runner)); },
    removeRunnerFromState: function () { dispatch(actions_1.removeCodeRunner()); }
}); };
var styling = styles_1.withStyles(styles);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styling(RunButton));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9SdW5CdXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixtREFBOEM7QUFDOUMsb0RBQStDO0FBQy9DLG1EQUF3SDtBQUd4SCwwREFBaUY7QUFDakYsMkNBQXNDO0FBQ3RDLDZEQUF1RjtBQUN2RiwwREFBb0Q7QUFDcEQsZ0RBQStDO0FBQy9DLHlEQUErRDtBQUMvRCwyREFBeUQ7QUFFekQsNENBQThDO0FBQzlDLGlDQUFtQztBQUVuQyw4RUFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLGlFQUFpRTtBQUNqRSwwREFBNEQ7QUFDM0QsTUFBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBYyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7QUFFN0MsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN6QyxNQUFNLEVBQUU7UUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRztLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNOLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7S0FDbEM7Q0FDSixDQUFDLEVBUDBDLENBTzFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyx1QkFBYyxDQUFDO0lBQzdCLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxhQUFHO0tBQ2Y7Q0FDSixDQUFDLENBQUM7QUFZSDtJQUF3Qiw2QkFBc0I7SUFBOUM7UUFBQSxxRUFpSEM7UUEvR0cseUJBQW1CLEdBQUcsVUFBQyxNQUFzQjtZQUN6QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUM3QixzQ0FBc0M7Z0JBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFN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