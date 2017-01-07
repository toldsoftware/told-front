"use strict";
var stringHelpers_1 = require("./stringHelpers");
function toActions(actionsRaw) {
    var a = {};
    for (var _i = 0, _a = Object.getOwnPropertyNames(actionsRaw); _i < _a.length; _i++) {
        var k = _a[_i];
        var aRaw = actionsRaw[k];
        a[k] = new Action(k, aRaw);
    }
    return a;
}
exports.toActions = toActions;
var Action = (function () {
    function Action(name, actionRaw) {
        this.name = name;
        this.actionRaw = actionRaw;
        this.label = stringHelpers_1.toTitle(name);
    }
    Action.prototype.do = function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        (_a = this.actionRaw).do.apply(_a, input);
        var _a;
    };
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=actions.js.map