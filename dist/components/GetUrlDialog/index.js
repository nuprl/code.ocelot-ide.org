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
var TextField_1 = require("@material-ui/core/TextField");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogActions_1 = require("@material-ui/core/DialogActions");
var DialogContent_1 = require("@material-ui/core/DialogContent");
var DialogContentText_1 = require("@material-ui/core/DialogContentText");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
/**
 * This React component displays an empty state for the canvas section
 * We didn't need this but I wrote it already and I didn't want to throw
 * it away.
 *
 * @class GetUrlDialog
 * @extends {React.Component<Props, State>}
 */
var GetUrlDialog = /** @class */ (function (_super) {
    __extends(GetUrlDialog, _super);
    function GetUrlDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (event) {
            _this.setState({ text: event.target.value });
        };
        _this.onClose = function () {
            _this.props.onClose();
            setTimeout(function () { return _this.setState({ error: false, text: '' }); }, 150);
            // we need setTimeout here because the dialog does not immediately fade out
            // we need it to fade out then set error back to false so that user doesn't
            // see that the text field changed.
        };
        _this.verifyAndSubmit = function () {
            if (_this.state.text.length === 0) {
                _this.setState({ error: true });
                return;
            }
            _this.props.hasUrl(_this.state.text);
            _this.onClose();
        };
        _this.state = {
            error: false,
            text: '',
        };
        return _this;
    }
    GetUrlDialog.prototype.render = function () {
        var open = this.props.open;
        return (React.createElement(Dialog_1.default, { open: open, onClose: this.onClose, "aria-labelledby": "form-dialog-title", color: "primary" },
            React.createElement(DialogTitle_1.default, { id: "form-dialog-title" }, "Upload Image"),
            React.createElement(DialogContent_1.default, null,
                React.createElement(DialogContentText_1.default, null, "Enter a URL of an image to upload to the canvas"),
                React.createElement(TextField_1.default, { autoFocus: true, margin: "dense", fullWidth: true, onChange: this.onChange, error: this.state.error, helperText: this.state.error ? 'No URL given' : 'Image URL' })),
            React.createElement(DialogActions_1.default, null,
                React.createElement(Button_1.default, { onClick: this.onClose, color: "secondary" }, "Close"),
                React.createElement(Button_1.default, { onClick: this.verifyAndSubmit, color: "secondary" }, "Upload"))));
    };
    return GetUrlDialog;
}(React.Component));
exports.default = GetUrlDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZXRVcmxEaWFsb2cvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixtREFBOEM7QUFDOUMseURBQW9EO0FBQ3BELG1EQUE4QztBQUM5QyxpRUFBNEQ7QUFDNUQsaUVBQTREO0FBQzVELHlFQUFvRTtBQUNwRSw2REFBd0Q7QUFZeEQ7Ozs7Ozs7R0FPRztBQUNIO0lBQTJCLGdDQUE2QjtJQUVwRCxzQkFBWSxLQUFZO1FBQXhCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFRCxjQUFRLEdBQ0YsVUFBQyxLQUFLO1lBQ0osS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBRU4sYUFBTyxHQUFHO1lBQ04sS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUF2QyxDQUF1QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELDJFQUEyRTtZQUMzRSwyRUFBMkU7WUFDM0UsbUNBQW1DO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLHFCQUFlLEdBQUc7WUFDZCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBMUJFLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQzs7SUFDTixDQUFDO0lBd0JELDZCQUFNLEdBQU47UUFDWSxJQUFBLHNCQUFJLENBQWdCO1FBQzVCLE9BQU8sQ0FDSCxvQkFBQyxnQkFBTSxJQUNILElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLHFCQUNMLG1CQUFtQixFQUNuQyxLQUFLLEVBQUMsU0FBUztZQUVmLG9CQUFDLHFCQUFXLElBQUMsRUFBRSxFQUFDLG1CQUFtQixtQkFBMkI7WUFDOUQsb0JBQUMsdUJBQWE7Z0JBQ1Ysb0JBQUMsMkJBQWlCLDBEQUVGO2dCQUNoQixvQkFBQyxtQkFBUyxJQUNOLFNBQVMsUUFDVCxNQUFNLEVBQUMsT0FBTyxFQUNkLFNBQVMsUUFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUM3RCxDQUNVO1lBQ2hCLG9CQUFDLHVCQUFhO2dCQUNWLG9CQUFDLGdCQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLFdBQVcsWUFFM0M7Z0JBQ0wsb0JBQUMsZ0JBQU0sSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUMsV0FBVyxhQUVuRCxDQUNPLENBQ1gsQ0FDWixDQUFDO0lBQ04sQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWxFRCxDQUEyQixLQUFLLENBQUMsU0FBUyxHQWtFekM7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==