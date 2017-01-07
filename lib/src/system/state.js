"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var simpleObservable_1 = require("./simpleObservable");
var StateSpy = (function () {
    function StateSpy() {
        this.subscribers_getValue = [];
    }
    StateSpy.prototype.subscribe_getValue = function (subscriber) {
        return this.subscribers_getValue.push(subscriber) - 1;
    };
    StateSpy.prototype.unsubscribe_getValue = function (iSubscriber) {
        this.subscribers_getValue[iSubscriber] = null;
    };
    StateSpy.prototype.notify_getValue = function (statePath) {
        for (var _i = 0, _a = this.subscribers_getValue; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x) {
                x(statePath);
            }
        }
    };
    return StateSpy;
}());
StateSpy.Instance = new StateSpy();
exports.StateSpy = StateSpy;
;
function toState(stateData) {
    return toStateInner(stateData, '', stateData);
}
exports.toState = toState;
function toStateInner(stateData, path, pathValue) {
    var s = {};
    for (var _i = 0, _a = Object.getOwnPropertyNames(pathValue); _i < _a.length; _i++) {
        var k = _a[_i];
        var kFullPath = path + '.' + k;
        var kPathValue = pathValue[k];
        var statePath = new StatePath(k, kPathValue, kFullPath);
        // statePath.subscribe(x => spy(statePath, x));
        var kObj = statePath; // , stateData, kPath) as any;
        if (typeof kPathValue === 'object') {
            var childValues = toStateInner(stateData, kFullPath, kPathValue);
            for (var c in childValues) {
                kObj[c] = childValues[c];
            }
        }
        s[k] = kObj;
    }
    return s;
}
var StatePath = (function (_super) {
    __extends(StatePath, _super);
    function StatePath(_key, _initialValue, _fullPath) {
        var _this = _super.call(this, _initialValue) || this;
        _this._key = _key;
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
    Object.defineProperty(StatePath.prototype, "value", {
        get: function () {
            StateSpy.Instance.notify_getValue(this);
            return this._value;
        },
        set: function (v) {
            this.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    return StatePath;
}(simpleObservable_1.SimpleSubject));
exports.StatePath = StatePath;
// export class StatePathArray<T>{
//     // For Arrays
//     // get 0(): any { throw ''; }
//     // forEach(callback: (x: any) => void): void {
//     //     throw 'Not Implemented';
//     // }
//     onlyArrays: number;
// } 
//# sourceMappingURL=state.js.map