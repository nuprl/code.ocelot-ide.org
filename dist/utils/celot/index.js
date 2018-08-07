"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("babel-types");
var babel = require("babel-core");
// import * as Babel from '@babel/standalone';
var runtime_1 = require("./runtime");
exports.celotSymposium = runtime_1.default;
var getTestFunctionId = function (statements) {
    var functionNameIdentifiers = [];
    for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
        var statement = statements_1[_i];
        if (!t.isFunctionDeclaration(statement.node)) {
            continue;
        }
        if (statement.node.id.name.substring(0, 4) === 'test') {
            functionNameIdentifiers.push(t.identifier(statement.node.id.name));
        }
    }
    return functionNameIdentifiers;
};
var visitor = {
    Program: {
        enter: function (path) {
            var functionIdentifiers = getTestFunctionId(path.get('body'));
            var numStatements = path.get('body').length;
            var testCallStatement = t.expressionStatement(t.callExpression(t.memberExpression(t.identifier('celotSymposium'), t.identifier('celot')), [t.arrayExpression(functionIdentifiers)]));
            if (numStatements === 0) {
                path.replaceWith(t.program([testCallStatement]));
                path.stop();
                return;
            }
            path.get('body')[numStatements - 1].insertAfter(testCallStatement);
            path.stop();
        }
    },
};
function plugin() {
    return { visitor: visitor };
}
function compile(code) {
    plugin();
    var result = babel.transform(code, {
        plugins: [plugin],
        ast: false,
        code: true
    });
    return result.code;
}
exports.compile = compile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvY2Vsb3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBaUM7QUFDakMsa0NBQW9DO0FBRXBDLDhDQUE4QztBQUM5QyxxQ0FBdUM7QUF1RHJCLHlCQXZEWCxpQkFBYyxDQXVEVztBQXJEaEMsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLFVBQW1DO0lBQzFELElBQUksdUJBQXVCLEdBQW1CLEVBQUUsQ0FBQztJQUNqRCxLQUFzQixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtRQUE3QixJQUFJLFNBQVMsbUJBQUE7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxTQUFTO1NBQ1o7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNuRCx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO0tBQ0o7SUFDRCxPQUFPLHVCQUF1QixDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFZO0lBQ3ZCLE9BQU8sRUFBRTtRQUNQLEtBQUssWUFBQyxJQUF5QjtZQUM3QixJQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FDN0MsQ0FBQyxDQUFDLGNBQWMsQ0FDWixDQUFDLENBQUMsZ0JBQWdCLENBQ2QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM5QixDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUN4QixFQUNELENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQ3pDLENBQ0osQ0FBQztZQUNGLElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUY7SUFDRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFRCxpQkFBaUIsSUFBWTtJQUMzQixNQUFNLEVBQUUsQ0FBQztJQUNULElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqQixHQUFHLEVBQUUsS0FBSztRQUNWLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSyxDQUFDO0FBRXRCLENBQUM7QUFFUSwwQkFBTyJ9