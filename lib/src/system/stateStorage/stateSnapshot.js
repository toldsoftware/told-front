"use strict";
exports.DELETE = 'DELETE';
function mergeChanges(changes) {
    var result = {};
    for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
        var x = changes_1[_i];
        assignDeep(result, x);
    }
    return result;
}
exports.mergeChanges = mergeChanges;
function assignDeep(target, source) {
    for (var k in source) {
        var v = source[k];
        if (v == null) {
            continue;
        }
        if (typeof v === 'object') {
            assignDeep(target[k], v);
        }
        else {
            target[k] = v;
        }
    }
}
//# sourceMappingURL=stateSnapshot.js.map