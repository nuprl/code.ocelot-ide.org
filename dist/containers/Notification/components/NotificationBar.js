"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Snackbar_1 = require("@material-ui/core/Snackbar");
var IconButton_1 = require("@material-ui/core/IconButton");
var Close_1 = require("@material-ui/icons/Close");
var styles_1 = require("@material-ui/core/styles");
// -- A presentational component
// the styles for styling an element with:
// close class i.e. equivalent to .close in css
var styles = function (theme) { return ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    }
}); };
/**
 * A presentational component that shows an Error in the form of a snackbar.
 * It takes in WithStyles and ErrorSnackbarProps as props. WithStyles is for
 * styling, the actual props are ErrorSnackbarProps
 *
 * @param {(WithStyles<'close'> & ErrorSnackbarProps)} props
 * @returns {React.ComponentType<Snackbar>}
 */
function ErrorSnackbar(props) {
    var handleClose = function (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        props.handleClose();
    };
    var handleClick = function (event) {
        props.handleClose();
    };
    var anchorOrigin = {
        vertical: 'top',
        horizontal: 'center',
    };
    if (props.position === 'bottom-right') {
        anchorOrigin = {
            vertical: 'bottom',
            horizontal: 'right',
        };
    }
    return (React.createElement(Snackbar_1.default, { anchorOrigin: anchorOrigin, open: props.open, autoHideDuration: 5000, onClose: handleClose, ContentProps: {
            'aria-describedby': 'message-id',
        }, message: React.createElement("span", { id: "message-id" }, props.message), action: [
            React.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", className: props.classes.close, onClick: handleClick },
                React.createElement(Close_1.default, { color: "secondary" })),
        ] }));
}
exports.default = styles_1.withStyles(styles)(ErrorSnackbar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lcnMvTm90aWZpY2F0aW9uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQix1REFBc0U7QUFDdEUsMkRBQXNEO0FBQ3RELGtEQUFpRDtBQUNqRCxtREFBc0Y7QUFHdEYsZ0NBQWdDO0FBRWhDLDBDQUEwQztBQUMxQywrQ0FBK0M7QUFDL0MsSUFBTSxNQUFNLEdBQXVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN6QyxLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUM3QixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNqQztDQUNKLENBQUMsRUFMMEMsQ0FLMUMsQ0FBQztBQVNIOzs7Ozs7O0dBT0c7QUFDSCx1QkFBdUIsS0FBK0M7SUFDbEUsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFnQyxFQUFFLE1BQWM7UUFDakUsSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQW9DO1FBQ3JELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixJQUFJLFlBQVksR0FBbUI7UUFDL0IsUUFBUSxFQUFFLEtBQUs7UUFDZixVQUFVLEVBQUUsUUFBUTtLQUN2QixDQUFDO0lBQ0YsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRTtRQUNuQyxZQUFZLEdBQUc7WUFDWCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsT0FBTztTQUN0QixDQUFDO0tBQ0w7SUFFRCxPQUFPLENBQ0gsb0JBQUMsa0JBQVEsSUFDTCxZQUFZLEVBQUUsWUFBWSxFQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxFQUN0QixPQUFPLEVBQUUsV0FBVyxFQUNwQixZQUFZLEVBQUU7WUFDVixrQkFBa0IsRUFBRSxZQUFZO1NBQ25DLEVBQ0QsT0FBTyxFQUFFLDhCQUFNLEVBQUUsRUFBQyxZQUFZLElBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBUSxFQUNyRCxNQUFNLEVBQUU7WUFDSixvQkFBQyxvQkFBVSxJQUNQLEdBQUcsRUFBQyxPQUFPLGdCQUNBLE9BQU8sRUFDbEIsS0FBSyxFQUFDLFNBQVMsRUFDZixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQzlCLE9BQU8sRUFBRSxXQUFXO2dCQUVwQixvQkFBQyxlQUFTLElBQUMsS0FBSyxFQUFDLFdBQVcsR0FBRyxDQUN0QjtTQUNoQixHQUNILENBQ0wsQ0FBQztBQUNOLENBQUM7QUFFRCxrQkFBZSxtQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDIn0=