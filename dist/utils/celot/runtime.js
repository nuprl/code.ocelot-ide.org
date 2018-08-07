"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.contendEqual = function (expected, actual) {
    if (expected === actual) {
        return true;
    }
    throw new Error("Assertion failed\n  Expected: " + expected + "\n  Actual: " + actual);
};
window.contendNotEqual = function (expected, actual) {
    if (expected !== actual) {
        return true;
    }
    throw new Error('Assertion failed');
};
/* tslint:disable:no-console */
var celotSymposium = {
    celot: function (tests) {
        if (tests.length === 0) {
            console.log("%c\u25C8 You don't seem to have any tests written", 'color: #e87ce8');
            console.log("%c\u25C8 To run a test, begin a function name with 'test'", 'color: #e87ce8');
            return;
        }
        console.log('Celot Testing Library');
        var numPassed = 0;
        var numFailed = 0;
        for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
            var test_1 = tests_1[_i];
            try {
                test_1();
                console.log("%c OK %c " + test_1.name, 'background-color: #2ac093; color: #212121;', 'color: #2ac093;');
                numPassed += 1;
            }
            catch (e) {
                console.log("%c FAILED %c " + test_1.name, 'background-color: #f44336; color: #212121;', 'color: #f44336;');
                console.log("  %c" + e, 'color: #f44336');
                numFailed += 1;
            }
        }
        var summarySymbol = '◆';
        if (numFailed > 0) {
            summarySymbol = '◇';
        }
        console.log(summarySymbol + " Summary");
        console.log("  %cCleared: " + numPassed, 'color: #2ac093;');
        console.log("  %cFailed: " + numFailed, 'color: #f44336;');
    }
};
exports.default = celotSymposium;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlscy9jZWxvdC9ydW50aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUMsTUFBYyxDQUFDLFlBQVksR0FBRyxVQUFDLFFBQWEsRUFBRSxNQUFXO0lBQ3RELElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNyQixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBaUMsUUFBUSxvQkFBZSxNQUFRLENBQUMsQ0FBQztBQUN0RixDQUFDLENBQUM7QUFFRCxNQUFjLENBQUMsZUFBZSxHQUFHLFVBQUMsUUFBYSxFQUFFLE1BQVc7SUFDekQsSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsK0JBQStCO0FBQy9CLElBQU0sY0FBYyxHQUFHO0lBQ25CLEtBQUssWUFBQyxLQUFxQjtRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQThDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUFzRCxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDdEYsT0FBTztTQUNWO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLE1BQUksY0FBQTtZQUNULElBQUk7Z0JBQ0EsTUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FDUCxjQUFZLE1BQUksQ0FBQyxJQUFNLEVBQ3ZCLDRDQUE0QyxFQUM1QyxpQkFBaUIsQ0FDcEIsQ0FBQztnQkFDRixTQUFTLElBQUksQ0FBQyxDQUFDO2FBQ2xCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FDUCxrQkFBZ0IsTUFBSSxDQUFDLElBQU0sRUFDM0IsNENBQTRDLEVBQzVDLGlCQUFpQixDQUNwQixDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBTyxDQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDMUMsU0FBUyxJQUFJLENBQUMsQ0FBQzthQUNsQjtTQUNKO1FBQ0QsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNmLGFBQWEsR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFJLGFBQWEsYUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsU0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxTQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUUvRCxDQUFDO0NBQ0osQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQyJ9