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

