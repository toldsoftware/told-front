"use strict";
var Observable = (function () {
    function Observable(initialValue) {
        this._history = [];
        this._subscribers = [];
        this.setValue(initialValue);
    }
    Object.defineProperty(Observable.prototype, "history", {
        get: function () { return this._history.map(function (x) { return x; }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Observable.prototype, "currentValue", {
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Observable.prototype.setValue = function (newValue) {
        var oldValue = this._value;
        this._value = newValue;
        this._history.push(newValue);
        for (var _i = 0, _a = this._subscribers; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x) {
                x(newValue, oldValue);
            }
        }
    };
    Observable.prototype.subscribe = function (callback) {
        var iSubscriber = this._subscribers.push(callback) - 1;
        return iSubscriber;
    };
    Observable.prototype.unsubscribe = function (iSubscriber) {
        this._subscribers[iSubscriber] = null;
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=observable.js.map