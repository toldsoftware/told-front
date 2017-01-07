import { TsxBuilder, TsxElement, ContainerTsxElement, toState, toActions } from './../../src';
import { HtmlElementInstance } from './../../src/platforms/html/htmlElementInstance';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('actions with button', () => {
    let stateData = { text: 'SOME TEXT' };
    let state = toState(stateData);

    let text = state.text;

    let actionsRaw = {
        changeText: {
            do: () => text.value = 'NEW TEXT',
        }
    };

    let actions = toActions(actionsRaw);

    let content =
        <wrap>
            <label>{state.text}</label>
            <button>{actions.changeText}</button>
        </wrap>;

    it('should become correct content', () => {
        expectHtml(content, '<div><span>SOME TEXT</span><button>Change Text</button></div>');
    });

    it('should change on action', () => {
        actions.changeText.do();
        expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
    });

    it('should change on button click', () => {
        state.text.value = 'RESET TEXT';
        expectHtml(content, '<div><span>RESET TEXT</span><button>Change Text</button></div>');

        let button = ((content as ContainerTsxElement).children[1].elementInstance as HtmlElementInstance<HTMLButtonElement>).domElement;
        expect(button).toBeDefined();
        expect(button.click).toBeDefined();
        button.click();

        expectHtml(content, '<div><span>NEW TEXT</span><button>Change Text</button></div>');
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
