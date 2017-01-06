import { TsxBuilder } from './../../src/tsxBuilder';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('label with state', () => {
    let stateRaw = { text: 'SOME TEXT' };
    // TODO: Proxy Up State as Observable
    let state = stateRaw;
    let label = <label>{state.text}</label>;

    it('should become span with text', () => {
        expectHtml(label, '<span>SOME TEXT</span>');
    });
});
