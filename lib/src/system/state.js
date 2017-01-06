"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var simpleObservable_1 = require("./simpleObservable");
function toState(stateData, path, pathValue) {
    if (path === void 0) { path = null; }
    if (pathValue === void 0) { pathValue = null; }
    var s = {};
    if (!path) {
        pathValue = stateData;
    }
    path = path || '';
    for (var _i = 0, _a = Object.getOwnPropertyNames(pathValue); _i < _a.length; _i++) {
        var k = _a[_i];
        var kPath = path + '.' + k;
        var kPathValue = pathValue[k];
        var kObj = new StatePath(k, kPathValue, stateData, kPath);
        if (typeof kPathValue === 'object') {
            var childValues = toState(stateData, kPath, kPathValue);
            for (var c in childValues) {
                kObj[c] = childValues[c];
            }
        }
        s[k] = kObj;
    }
    return s;
}
exports.toState = toState;
var StatePath = (function (_super) {
    __extends(StatePath, _super);
    function StatePath(_key, _initialValue, _originalState, _fullPath) {
        var _this = _super.call(this, _initialValue) || this;
        _this._key = _key;
        _this._originalState = _originalState;
        _this._fullPath = _fullPath;
        return _this;
    }
    StatePath.prototype.emit = function (newValue) {
        this.setValue(newValue);
        // Emit new values into all children
        var keys = Object.getOwnPropertyNames(this).filter(function (x) { return !x.match(/^_/); });
        console.log("StatePath.emit: keys=\"" + keys + "\""); // , newValue="${newValue}", this="${this}""`);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            console.log("StatePath.emit: [key]=\"" + k + "\"");
            this[k].emit(newValue[k]);
        }
    };
    return StatePath;
}(simpleObservable_1.SimpleSubject));
exports.StatePath = StatePath;
//# sourceMappingURL=state.js.map