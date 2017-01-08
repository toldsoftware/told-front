"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('arrays', function () {
    var stateData = {
        text: 'TEXT',
        tasks: [
            {
                complete: false,
                title: 'This task is not done yet!'
            },
            {
                complete: true,
                title: 'This task is already done!'
            }
        ],
    };
    var state = src_1.toState(stateData);
    var actionsRaw = {
        completeAll: src_1.actionArray(state.tasks, {
            do: function (t) { return t.forEach(function (x) { return x.complete.value = true; }); },
        }),
        completeTask: src_1.actionArrayItems(state.tasks, {
            do: function (t) { return t.complete.value = true; },
        }),
        deleteTask: src_1.actionArrayItems(state.tasks, {
            do: function (t) { return t.arrayValue = t.arrayValue.splice(t.arrayIndex, 1); },
        }),
    };
    var actions = src_1.toActions2(actionsRaw);
    var content = src_1.TsxBuilder.createElement("wrap", null, src_1.items(state.tasks, function (item) {
        return src_1.TsxBuilder.createElement("wrap", null,
            src_1.TsxBuilder.createElement("button", null, actions.completeTask),
            src_1.TsxBuilder.createElement("label", null, item.title),
            src_1.TsxBuilder.createElement("button", null, actions.deleteTask));
    }));
    // it('should become correct content', () => {
    //     expectHtml(content, '<div><span>SOME TEXT</span><button>Change Text</button></div>');
    // });
    // it('should change on action', () => {
    //     actions.changeText.do();
    //     expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
    // });
    // it('should change on button click', () => {
    //     state.text.value = 'RESET TEXT';
    //     expectHtml(content, '<div><span>RESET TEXT</span><button>Change Text</button></div>');
    //     let button = ((content as ContainerTsxElement).children[1].elementInstance as HtmlElementInstance<HTMLButtonElement>).domElement;
    //     expect(button).toBeDefined();
    //     expect(button.click).toBeDefined();
    //     button.click();
    //     expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
    // });
});
//# sourceMappingURL=005-arrays.js.map