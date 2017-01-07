"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('state with label', function () {
    var stateData = { text: 'SOME TEXT' };
    var state = src_1.toState(stateData);
    var label = src_1.TsxBuilder.createElement("label", null, state.text);
    it('should become span with text', function () {
        _0_helpers_1.expectHtml(label, '<span>SOME TEXT</span>');
    });
    it('should change on state change', function () {
        state.text.value = 'NEW VALUE';
        _0_helpers_1.expectHtml(label, '<span>NEW VALUE</span>');
    });
});
describe('nested state with label', function () {
    var stateData = { text: 'SOME TEXT', nested: { inner: 'INNER TEXT', nested2: { inner2: 'INNER2' } } };
    var state = src_1.toState(stateData);
    var label = src_1.TsxBuilder.createElement("label", null, state.nested.nested2.inner2);
    it('should become span with text', function () {
        _0_helpers_1.expectHtml(label, '<span>INNER2</span>');
    });
    it('should change on state change', function () {
        state.nested.nested2.inner2.value = 'NEW INNER2';
        _0_helpers_1.expectHtml(label, '<span>NEW INNER2</span>');
    });
    it('should change on parent state change', function () {
        state.nested.value = { inner: 'NEW INNER TEXT', nested2: { inner2: 'NEW NESTED INNER2' } };
        _0_helpers_1.expectHtml(label, '<span>NEW NESTED INNER2</span>');
    });
});
describe('state in calculation with label', function () {
    var stateData = { count: 0 };
    var state = src_1.toState(stateData);
    var label = src_1.TsxBuilder.createElement("label", null, function () { return state.count.value + (state.count.value === 1 ? ' item left' : ' items left'); });
    it('should show correct suffix at 0', function () {
        _0_helpers_1.expectHtml(label, '<span>0 items left</span>');
    });
    it('should show correct suffix at 1', function () {
        state.count.value = 1;
        _0_helpers_1.expectHtml(label, '<span>1 item left</span>');
    });
    it('should show correct suffix at 2', function () {
        state.count.value = 2;
        _0_helpers_1.expectHtml(label, '<span>2 items left</span>');
    });
});
describe('state in calculation attribute with label', function () {
    var stateData = { count: 0 };
    var state = src_1.toState(stateData);
    var label = src_1.TsxBuilder.createElement("label", { suffix: function () { return (state.count.value === 1 ? ' item left' : ' items left'); } }, state.count);
    it('should show correct suffix at 0', function () {
        _0_helpers_1.expectHtml(label, '<span>0 items left</span>');
    });
    it('should show correct suffix at 1', function () {
        state.count.value = 1;
        _0_helpers_1.expectHtml(label, '<span>1 item left</span>');
    });
    it('should show correct suffix at 2', function () {
        state.count.value = 2;
        _0_helpers_1.expectHtml(label, '<span>2 items left</span>');
    });
});
//# sourceMappingURL=003-state.js.map