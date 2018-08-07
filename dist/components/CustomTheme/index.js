"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
// A theme with custom primary and secondary color.
// It's optional.
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#80d6ff',
            main: '#42a5f5',
            dark: '#0077c2',
            contrastText: '#fff',
        },
        type: 'dark'
    },
    zIndex: {
        drawer: 1,
        appBar: 2,
    }
});
function CustomTheme(Component) {
    function customTheme(props) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
            React.createElement(CssBaseline_1.default, null),
            React.createElement(Component, __assign({}, props))));
    }
    return customTheme;
}
exports.default = CustomTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DdXN0b21UaGVtZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixtREFBNEU7QUFDNUUsNkRBQXdEO0FBRXhELG1EQUFtRDtBQUNuRCxpQkFBaUI7QUFDakIsSUFBTSxLQUFLLEdBQUcsdUJBQWMsQ0FBQztJQUMzQixPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztLQUNWO0NBQ0YsQ0FBQyxDQUFDO0FBRUgscUJBQXFCLFNBQThCO0lBQ2pELHFCQUFxQixLQUFhO1FBQ2hDLGlFQUFpRTtRQUNqRSwyQkFBMkI7UUFDM0IsT0FBTyxDQUNMLG9CQUFDLHlCQUFnQixJQUFDLEtBQUssRUFBRSxLQUFLO1lBRTVCLG9CQUFDLHFCQUFXLE9BQUc7WUFDZixvQkFBQyxTQUFTLGVBQUssS0FBSyxFQUFJLENBQ1AsQ0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=