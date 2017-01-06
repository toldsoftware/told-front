"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function toState(stateData, path, pathObject) {
    if (path === void 0) { path = ''; }
    if (pathObject === void 0) { pathObject = null; }
    var s = {};
    if (path = '') {
        pathObject = stateData;
    }
    for (var _i = 0, _a = Object.getOwnPropertyNames(pathObject); _i < _a.length; _i++) {
        var k = _a[_i];
        var kPath = path + '.' + k;
        var kPathObject = pathObject[k];
        var children = {};
        if (typeof pathObject === 'Object') {
            children = toState(stateData, kPath, kPathObject);
        }
        s[k] = __assign({}, children, new StatePath(stateData, kPath));
    }
    return s;
}
exports.toState = toState;
var StatePath = (function () {
    function StatePath(state, path) {
        this.state = state;
        this.path = path;
    }
    StatePath.prototype.subscribe = function (subscriber) {
        // TODO:
    };
    StatePath.prototype.emit = function (newValue) {
        // TODO:
    };
    return StatePath;
}());
exports.StatePath = StatePath;
//# sourceMappingURL=state.js.map