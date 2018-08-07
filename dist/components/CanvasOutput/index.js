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
// import defaultImage from '../../static/img/defaultCanvasImage.jpg';
var react_resize_detector_1 = require("react-resize-detector");
require("static/styles/Scrollbar.css");
// import Typography from '@material-ui/core/Typography';
var CloudUpload_1 = require("@material-ui/icons/CloudUpload");
var Button_1 = require("@material-ui/core/Button");
var Zoom_1 = require("@material-ui/core/Zoom");
var styles = function (theme) { return ({
    root: {
        background: theme.palette.primary.main,
        width: '100%',
        height: '100%',
    },
    canvasArea: {
        width: '100%',
        // display: 'flex', // this is for empty state
        // flexDirection: 'column',
        // alignItems: 'center', /* Vertical center alignment */
        // justifyContent: 'center', /* Horizontal center alignment */
        height: 'calc(100% - 48px)',
        overflowY: 'auto',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
    },
    icon: {
        fontSize: '12em',
        color: theme.palette.primary.contrastText,
        opacity: 0.7,
    }
}); };
var CanvasOutput = /** @class */ (function (_super) {
    __extends(CanvasOutput, _super);
    function CanvasOutput(props) {
        var _this = _super.call(this, props) || this;
        _this.inputCanvas = null;
        _this.outputCanvas = null;
        _this.onTabChange = function (event, value) {
            _this.setState({ tabIndex: value });
        };
        _this.onResize = function () {
            if (_this.inputCanvas === null || _this.outputCanvas === null) {
                return;
            }
            _this.inputCanvas.style.width = '100%';
            _this.outputCanvas.style.width = '100%';
        };
        _this.state = {
            tabIndex: 0,
        };
        return _this;
    }
    CanvasOutput.prototype.componentDidMount = function () {
        this.inputCanvas = document.getElementById('inputCanvas');
        this.outputCanvas = document.getElementById('outputCanvas');
    };
    CanvasOutput.prototype.render = function () {
        var classes = this.props.classes;
        var tabIndex = this.state.tabIndex;
        return (React.createElement("div", { className: classes.root },
            React.createElement(react_resize_detector_1.default, { handleWidth: true, handleHeight: true, onResize: this.onResize }),
            React.createElement(AppBar_1.default, { position: "static" },
                React.createElement(Tabs_1.default, { value: tabIndex, onChange: this.onTabChange },
                    React.createElement(Tab_1.default, { label: "Input" }),
                    React.createElement(Tab_1.default, { label: "Output" }))),
            React.createElement("div", { className: classes.canvasArea + " scrollbars" },
                React.createElement("canvas", { id: "inputCanvas", height: "400", width: "600", style: tabIndex === 0 ? {} : { display: 'none' } }),
                React.createElement("canvas", { id: "outputCanvas", height: "400", width: "600", style: tabIndex === 1 ? {} : { display: 'none' } }),
                React.createElement(Zoom_1.default, { in: tabIndex === 0, unmountOnExit: true },
                    React.createElement(Button_1.default, { variant: "fab", color: "secondary", "aria-label": "Upload", className: classes.fab },
                        React.createElement(CloudUpload_1.default, null))))));
    };
    return CanvasOutput;
}(React.Component));
exports.default = styles_1.withStyles(styles)(CanvasOutput);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYW52YXNPdXRwdXQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixtREFBc0Y7QUFDdEYsbURBQThDO0FBQzlDLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsc0VBQXNFO0FBQ3RFLCtEQUF3RDtBQUN4RCx1Q0FBcUM7QUFDckMseURBQXlEO0FBQ3pELDhEQUF3RDtBQUN4RCxtREFBOEM7QUFDOUMsK0NBQTBDO0FBRTFDLElBQU0sTUFBTSxHQUF1QixVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0YsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUk7UUFDdEMsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRSxNQUFNO1FBQ2IsOENBQThDO1FBQzlDLDJCQUEyQjtRQUMzQix3REFBd0Q7UUFDeEQsOERBQThEO1FBQzlELE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsU0FBUyxFQUFFLE1BQU07S0FDcEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxRQUFRLEVBQUUsVUFBVTtRQUNwQixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNoQztJQUNELElBQUksRUFBRTtRQUNGLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1FBQ3pDLE9BQU8sRUFBRSxHQUFHO0tBQ2Y7Q0FDSixDQUFDLEVBekIwQyxDQXlCMUMsQ0FBQztBQVFIO0lBQTJCLGdDQUE2QjtJ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