"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var index_1 = require("./pages/index");
var store = store_1.configureStore();
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(index_1.default, null)), document.querySelector('#root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBQy9CLG9DQUFzQztBQUN0QywyQ0FBdUM7QUFDdkMsaUNBQXlDO0FBQ3pDLHVDQUFrQztBQUVsQyxJQUFNLEtBQUssR0FBRyxzQkFBYyxFQUFFLENBQUM7QUFFL0IsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxzQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO0lBQ2xCLG9CQUFDLGVBQUssT0FBRyxDQUNGLEVBQ1gsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDbEMsQ0FBQyJ9