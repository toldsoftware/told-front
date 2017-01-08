import { TsxBuilder, TsxElement, ContainerTsxElement, toState, action, actionWithInput, actionArray, actionArrayItems, toActions2, items } from './../../src';
import { HtmlElementInstance } from './../../src/platforms/html/htmlElementInstance';
import { initPlatform, expectHtml, raiseOnChange } from './0-helpers';

initPlatform();

describe('arrays', () => {
    let stateData = {
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

    let state = toState(stateData);

    let actionsRaw = {
        completeAll: actionArray(state.tasks, {
            do: (t) => t.forEach(x => x.complete.value = true),
        }),
        completeTask: actionArrayItems(state.tasks, {
            do: (t) => t.complete.value = true,
        }),
        deleteTask: actionArrayItems(state.tasks, {
            do: (t) => t.arrayValue = t.arrayValue.splice(t.arrayIndex, 1),
        }),
        // completeTask2: action(state.tasks[0], {
        //     do: (t) => t.complete = true,
        // })
    };

    let actions = toActions2(actionsRaw);

    let content =
        <wrap>
            {items(state.tasks, item =>
                <wrap>
                    <button>{actions.completeTask}</button>
                    <label>{item.title}</label>
                    <button>{actions.deleteTask}</button>
                </wrap>
            )}
        </wrap>;

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
