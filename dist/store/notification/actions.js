"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("./types");
// Isn't this a bit verbose? (Talking to myself)
exports.triggerNotification = function (message, position) { return ({
    type: t.TRIGGER_NOTIFICATION,
    message: message,
    position: position
}); };
exports.closeNotification = function () { return ({
    type: t.CLOSE_NOTIFICATION
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS9ub3RpZmljYXRpb24vYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUE2QjtBQUc3QixnREFBZ0Q7QUFDbkMsUUFBQSxtQkFBbUIsR0FDOUIsVUFBQyxPQUFlLEVBQUUsUUFBZ0MsSUFBSyxPQUFBLENBQUM7SUFDdEQsSUFBSSxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7SUFDNUIsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQyxFQUp1RCxDQUl2RCxDQUFDO0FBRVUsUUFBQSxpQkFBaUIsR0FDNUIsY0FBTSxPQUFBLENBQUM7SUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtDQUM3QixDQUFDLEVBRk0sQ0FFTixDQUFDIn0=