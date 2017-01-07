"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
function action(scope, params) {
    return new Action2NoInput(scope, params);
}
exports.action = action;
function actionWithInput(scope, input, params) {
    return new Action2WithInput(scope, params, input);
}
exports.actionWithInput = actionWithInput;
var Action2Base = (function () {
    function Action2Base(scope, params, input) {
        this.scope = scope;
        this.params = params;
        this.input = input;
    }
    Action2Base.prototype.setName = function (name) {
        this.name = name;
        this.label = stringHelpers_1.toTitle(name);
    };
    Action2Base.prototype.do = function (input) {
        this.params.do(this.scope, input);
    };
    return Action2Base;
}());
exports.Action2Base = Action2Base;
var Action2NoInput = (function (_super) {
    __extends(Action2NoInput, _super);
    function Action2NoInput(scope, params) {
        var _this = _super.call(this, scope, params) || this;
        _this.scope = scope;
        _this.params = params;
        return _this;
    }
    return Action2NoInput;
}(Action2Base));
exports.Action2NoInput = Action2NoInput;
var Action2WithInput = (function (_super) {
    __extends(Action2WithInput, _super);
    function Action2WithInput(scope, params, input) {
        var _this = _super.call(this, scope, params, input) || this;
        _this.scope = scope;
        _this.params = params;
        _this.input = input;
        return _this;
    }
    Action2WithInput.prototype.setName = function (name) {
        this.name = name;
        this.label = stringHelpers_1.toTitle(name);
    };
    Action2WithInput.prototype.do = function (input) {
        this.params.do(this.scope, input);
    };
    return Action2WithInput;
}(Action2Base));
exports.Action2WithInput = Action2WithInput;
function toActions2(actions) {
    for (var _i = 0, _a = Object.getOwnPropertyNames(actions); _i < _a.length; _i++) {
        var k = _a[_i];
        actions[k].setName(k);
    }
    return actions;
}
exports.toActions2 = toActions2;
//# sourceMappingURL=actions.js.map