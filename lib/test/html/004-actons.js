"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('actions with button', function () {
    var stateData = { text: 'SOME TEXT' };
    var state = src_1.toState(stateData);
    var text = state.text;
    var actionsRaw = {
        changeText: {
            do: function () { return text.value = 'NEW TEXT'; },
        }
    };
    var actions = src_1.toActions(actionsRaw);
    var content = src_1.TsxBuilder.createElement("wrap", null,
        src_1.TsxBuilder.createElement("label", null, state.text),
        src_1.TsxBuilder.createElement("button", null, actions.changeText));
    it('should become correct content', function () {
        _0_helpers_1.expectHtml(content, '<div><span>SOME TEXT</span><button>Change Text</button></div>');
    });
    it('should change on action', function () {
        actions.changeText.do();
        _0_helpers_1.expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
    });
    it('should change on button click', function () {
        state.text.value = 'RESET TEXT';
        _0_helpers_1.expectHtml(content, '<div><span>RESET TEXT</span><button>Change Text</button></div>');
        var button = content.children[1].elementInstance.domElement;
        expect(button).toBeDefined();
        expect(button.click).toBeDefined();
        button.click();
        _0_helpers_1.expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
    });
});
// describe('nested state with label', () => {
//     let stateData = { text: 'SOME TEXT', nested: { inner: 'INNER TEXT', nested2: { inner2: 'INNER2' } } };
//     let state = toState(stateData);
//     let label = <label>{state.nested.nested2.inner2}</label>;
//     it('should become span with text', () => {
//         expectHtml(label, '<span>INNER2</span>');
//     });
//     it('should change on state change', () => {
//         state.nested.nested2.inner2.emit('NEW INNER2');
//         expectHtml(label, '<span>NEW INNER2</span>');
//     });
//     it('should change on parent state change', () => {
//         state.nested.emit({ inner: 'NEW INNER TEXT', nested2: { inner2: 'NEW NESTED INNER2' } });
//         expectHtml(label, '<span>NEW NESTED INNER2</span>');
//     });
// });
// describe('state in calculation with label', () => {
//     let stateData = { count: 0 };
//     let state = toState(stateData);
//     let label = <label>{() => state.count.value + (state.count.value === 1 ? ' item left' : ' items left')}</label>;
//     it('should show correct suffix at 0', () => {
//         expectHtml(label, '<span>0 items left</span>');
//     });
//     it('should show correct suffix at 1', () => {
//         state.count.emit(1);
//         expectHtml(label, '<span>1 item left</span>');
//     });
//     it('should show correct suffix at 2', () => {
//         state.count.emit(2);
//         expectHtml(label, '<span>2 items left</span>');
//     });
// });
// describe('state in calculation attribute with label', () => {
//     let stateData = { count: 0 };
//     let state = toState(stateData);
//     let label = <label suffix={() => (state.count.value === 1 ? ' item left' : ' items left')}>{state.count}</label>;
//     it('should show correct suffix at 0', () => {
//         expectHtml(label, '<span>0 items left</span>');
//     });
//     it('should show correct suffix at 1', () => {
//         state.count.emit(1);
//         expectHtml(label, '<span>1 item left</span>');
//     });
//     it('should show correct suffix at 2', () => {
//         state.count.emit(2);
//         expectHtml(label, '<span>2 items left</span>');
//     });
// });
//# sourceMappingURL=004-actons.js.map