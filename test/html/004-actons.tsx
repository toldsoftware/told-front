import { TsxBuilder, TsxElement, ContainerTsxElement, toState, action, actionWithInput, toActions2 } from './../../src';
import { HtmlElementInstance } from './../../src/platforms/html/htmlElementInstance';
import { initPlatform, expectHtml, raiseOnChange } from './0-helpers';

initPlatform();

describe('actions with button', () => {
    let stateData = { text: 'SOME TEXT' };
    let state = toState(stateData);

    let actionsRaw = {
        changeText: action(state.text, {
            do: (t) => t.value = 'NEW TEXT',
        })
    };

    let actions = toActions2(actionsRaw);

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

describe('actions with textbox', () => {
    let stateData = { text: 'SOME TEXT' };
    let state = toState(stateData);

    // let text = state.text;

    let actionsRaw = {
        changeText: actionWithInput(state.text, 'Sample Input', {
            do: (t, input) => t.value = input,
        }),
    };

    let actions = toActions2(actionsRaw);

    let content =
        <wrap>
            <label>{state.text}</label>
            <textbox>{actions.changeText}</textbox>
        </wrap>;

    // NOTE: Input to dom html does not include closing tag or .value (value attribute is used for initial value not current value)
    // - input dom has no closing tag
    // - input.value has to be checked separately
    let input_textbox = ((content as ContainerTsxElement).children[1].elementInstance as HtmlElementInstance<HTMLInputElement>).domElement;

    it('should become correct content', () => {
        expectHtml(content, '<div><span>SOME TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('SOME TEXT');
    });

    it('should change on action', () => {
        actions.changeText.do('NEW TEXT');
        expectHtml(content, '<div><span>NEW TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('NEW TEXT');
    });

    it('should change on input', (done) => {
        state.text.value = 'RESET TEXT';
        expectHtml(content, '<div><span>RESET TEXT</span><input type="text"></div>');
        expect(input_textbox.value).toBe('RESET TEXT');

        expect(input_textbox).toBeDefined();
        input_textbox.value = 'NEW TEXT';
        raiseOnChange(input_textbox);

        setTimeout(() => {
            expectHtml(content, '<div><span>NEW TEXT</span><input type="text"></div>');
            expect(input_textbox.value).toBe('NEW TEXT');
            done();
        });
    });
});