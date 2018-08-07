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
var react_redux_1 = require("react-redux");
var actions_1 = require("../../store/codeEditor/actions");
var selectors_1 = require("../../store/userFiles/selectors");
var Explore_1 = require("@material-ui/icons/Explore");
var ExploreOff_1 = require("@material-ui/icons/ExploreOff");
var saveHistory_1 = require("../../utils/api/saveHistory");
var celot_1 = require("../../utils/celot");
var apiHelpers_1 = require("../../utils/api/apiHelpers");
var styles = function (theme) { return ({
    button: {
        margin: theme.spacing.unit * 0.5,
        marginLeft: 0,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
}); };
var greenTheme = styles_1.createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2ac093'
        },
    }
});
var redTheme = styles_1.createMuiTheme({
    palette: {
        type: 'dark',
        primary: red_1.default
    }
});
// Test button and run button is very copypasta code
// we need a more general component to wrap TestButton and RunStopButton
var TestButton = /** @class */ (function (_super) {
    __extends(TestButton, _super);
    function TestButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleStopifyResult = function (result) {
            if (result.type === 'exception') {
                // tslint:disable-next-line:no-console
                console.error(result.value, result.stack[0]);
            }
        };
        _this.onRun = function () {
            try {
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
                // tslint:disable-next-line:no-console
                window.celotSymposium = celot_1.celotSymposium;
                // tslint:disable-next-line:no-console
                console.log(celot_1.compile(_this.props.code));
                var runner = stopify.stopifyLocally(celot_1.compile(_this.props.code), {
                    externals: [
                        'console',
                        'celotSymposium',
                        'contendEqual',
                        'contendNotEqual'
                    ]
                }, {
                // estimator: 'countdown',
                // yieldInterval: 1
                });
                _this.props.setRunnerToState(runner);
                runner.run(function (result) {
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
            if (typeof _this.props.testRunner === 'undefined') {
                return;
            }
            _this.props.testRunner.pause(function (line) {
                // tslint:disable-next-line:no-console
                console.log('stopped');
                _this.props.removeRunnerFromState();
            });
        };
        return _this;
    }
    TestButton.prototype.render = function () {
        var _a = this.props, classes = _a.classes, testRunner = _a.testRunner, enabled = _a.enabled;
        var runnerExists = testRunner !== undefined;
        var currentButton = (React.createElement(styles_1.MuiThemeProvider, { theme: greenTheme },
            React.createElement(Button_1.default, { color: "primary", className: classes.button, onClick: this.onRun, disabled: !enabled },
                React.createElement(Explore_1.default, { color: "inherit", className: classes.leftIcon }),
                "Test")));
        if (runnerExists) {
            currentButton = (React.createElement(styles_1.MuiThemeProvider, { theme: redTheme },
                React.createElement(Button_1.default, { color: "primary", className: classes.button, onClick: this.onStop },
                    React.createElement(ExploreOff_1.default, { color: "inherit", className: classes.leftIcon }),
                    "Test")));
        }
        return (React.createElement("div", { style: { display: 'inline-block' } }, currentButton));
    };
    return TestButton;
}(React.Component));
var mapStateToProps = function (state) { return ({
    testRunner: state.codeEditor.testRunner,
    code: selectors_1.getSelectedCode(state),
    enabled: typeof state.codeEditor.codeRunner === 'undefined',
    fileName: selectors_1.getSelectedFileName(state),
    loggedIn: state.userLogin.loggedIn
}); };
var mapDispatchToProps = function (dispatch) { return ({
    setRunnerToState: function (runner) { dispatch(actions_1.setTestRunner(runner)); },
    removeRunnerFromState: function () { dispatch(actions_1.removeTestRunner()); }
}); };
var styling = styles_1.withStyles(styles);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styling(TestButton));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9UZXN0QnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsbURBQThDO0FBQzlDLG9EQUErQztBQUMvQyxtREFBd0g7QUFFeEgsMkNBQXNDO0FBRXRDLDBEQUFpRjtBQUNqRiw2REFBdUY7QUFDdkYsc0RBQXFEO0FBQ3JELDREQUEyRDtBQUMzRCwyREFBeUQ7QUFDekQsMkNBQTREO0FBQzVELHlEQUErRDtBQVUvRCxJQUFNLE1BQU0sR0FBdUIsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ3pDLE1BQU0sRUFBRTtRQUNKLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHO1FBQ2hDLFVBQVUsRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtLQUNsQztDQUNKLENBQUMsRUFSMEMsQ0FRMUMsQ0FBQztBQUVILElBQU0sVUFBVSxHQUFHLHVCQUFjLENBQUM7SUFDOUIsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUztTQUNsQjtLQUNKO0NBQ0osQ0FBQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQUcsdUJBQWMsQ0FBQztJQUM1QixPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxhQUFHO0tBQ2Y7Q0FDSixDQUFDLENBQUM7QUFXSCxvREFBb0Q7QUFDcEQsd0VBQXdFO0FBQ3hFO0lBQXlCLDhCQUFzQjtJQUEvQztRQUFBLHFFQTJHQztRQXpHRyx5QkFBbUIsR0FBRyxVQUFDLE1BQXFCO1lBQ3hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQzdC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