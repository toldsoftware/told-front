"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('actions with button', function () {
    var stateData = { text: 'SOME TEXT' };
    var state = src_1.toState(stateData);
    var text = state.text;
    var actionsRaw = {
        changeText: src_1.action(state.text, {
            do: function (t) { return t.value = 'NEW TEXT'; },
        })
    };
    var actions = src_1.toActions2(actionsRaw);
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
describe('actions with textbox', function () {
    var stateData = { text: 'SOME TEXT' };
    var state = src_1.toState(stateData);
    // let text = state.text;
    var actionsRaw = {
        changeText: src_1.actionWithInput(state.text, 'Sample Input', {
            do: function (t, input) { return t.value = input; },
        }),
    };
    var actions = src_1.toActions2(actionsRaw);
    var content = src_1.TsxBuilder.createElement("wrap", null,
        src_1.TsxBuilder.createElement("label", null, state.text),
        src_1.TsxBuilder.createElement("textbox", null, actions.changeText));
    var input_textbox = content.children[1].elementInstance.domElement;
    it('should become correct content', function () {
        _0_helpers_1.expectHtml(content, '<div><span>SOME TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('SOME TEXT');
    });
    it('should change on action', function () {
        actions.changeText.do('NEW TEXT');
        _0_helpers_1.expectHtml(content, '<div><span>NEW TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('NEW TEXT');
    });
    it('should change on input', function (done) {
        state.text.value = 'RESET TEXT';
        _0_helpers_1.expectHtml(content, '<div><span>RESET TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('RESET TEXT');
        expect(input_textbox).toBeDefined();
        input_textbox.value = 'NEW TEXT';
        _0_helpers_1.raiseOnChange(input_textbox);
        setTimeout(function () {
            _0_helpers_1.expectHtml(content, '<div><span>NEW TEXT</span><input type="text"></div>');
            expect(input_textbox.value).toBe('NEW TEXT');
            done();
        });
    });
});
//# sourceMappingURL=004-actons.js.map