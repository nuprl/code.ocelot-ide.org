"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("./types");
exports.logOutUser = function () { return ({
    type: t.LOG_OUT_USER
}); };
exports.logInUserRequest = function (googleUser) { return ({
    type: t.LOG_IN_USER_REQUEST,
    googleUser: googleUser
}); };
exports.logInUserSuccess = function (email) { return ({
    type: t.LOG_IN_USER_SUCCESS,
    email: email
}); };
exports.loadingOngoing = function () { return ({
    type: t.LOADING_ONGOING
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS91c2VyTG9naW4vYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUE2QjtBQUloQixRQUFBLFVBQVUsR0FDakIsY0FBTSxPQUFBLENBQUM7SUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVk7Q0FDdkIsQ0FBQyxFQUZNLENBRU4sQ0FBQztBQUVNLFFBQUEsZ0JBQWdCLEdBQ3ZCLFVBQUMsVUFBK0IsSUFBSyxPQUFBLENBQUM7SUFDcEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7SUFDM0IsVUFBVSxFQUFFLFVBQVU7Q0FDekIsQ0FBQyxFQUhxQyxDQUdyQyxDQUFDO0FBRU0sUUFBQSxnQkFBZ0IsR0FDdkIsVUFBQyxLQUFhLElBQUssT0FBQSxDQUFDO0lBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsbUJBQW1CO0lBQzNCLEtBQUssRUFBRSxLQUFLO0NBQ2YsQ0FBQyxFQUhtQixDQUduQixDQUFDO0FBRU0sUUFBQSxjQUFjLEdBQ3JCLGNBQU0sT0FBQSxDQUFDO0lBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlO0NBQzFCLENBQUMsRUFGTSxDQUVOLENBQUMifQ==