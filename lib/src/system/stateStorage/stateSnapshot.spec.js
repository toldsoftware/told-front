"use strict";
var _1 = require("./");
describe('mergeChanges with simple state', function () {
    var state = { text: 'A' };
    var change = { text: 'B' };
    it('should have merged result', function () {
        var result = _1.mergeChanges([state, change]);
        expect(result).toEqual({ text: 'B' });
    });
});
describe('mergeChanges with 2 level state', function () {
    var state = { text: 'A', nested: { text: 'A' } };
    var change = { text: 'B', nested: { text: 'B' } };
    it('should have merged result', function () {
        var result = _1.mergeChanges([state, change]);
        expect(result).toEqual({ text: 'B', nested: { text: 'B' } });
    });
});
describe('mergeChanges with missing values', function () {
    var state = { text: 'A', nested: { text: 'A' } };
    var change = { nested: { text: 'B' } };
    it('should have merged result', function () {
        var result = _1.mergeChanges([state, change]);
        expect(result).toEqual({ text: 'A', nested: { text: 'B' } });
    });
});
describe('mergeChanges with added values', function () {
    var state = { text: 'A', nested: { text: 'A' } };
    var change = { newItem: 'B', nested: { text: 'B' } };
    it('should have merged result', function () {
        var result = _1.mergeChanges([state, change]);
        expect(result).toEqual({ text: 'A', newItem: 'B', nested: { text: 'B' } });
    });
});
//# sourceMappingURL=stateSnapshot.spec.js.map