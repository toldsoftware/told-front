import { TsxBuilder, toState } from './../../src';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('label with state', () => {
    let stateData = { text: 'SOME TEXT' };
    let state = toState(stateData);
    let label = <label>{state.text}</label>;

    it('should become span with text', () => {
        expectHtml(label, '<span>SOME TEXT</span>');
    });

    it('should change on state change', () => {
        state.text.emit('NEW VALUE');
        expectHtml(label, '<span>NEW VALUE</span>');
    });
});


describe('label with nested state', () => {
    let stateData = { text: 'SOME TEXT', nested: { inner: 'INNER TEXT', nested2: { inner2: 'INNER2' } } };
    let state = toState(stateData);
    let label = <label>{state.nested.nested2.inner2}</label>;

    it('should become span with text', () => {
        expectHtml(label, '<span>INNER2</span>');
    });

    it('should change on state change', () => {
        state.nested.nested2.inner2.emit('NEW INNER2');
        expectHtml(label, '<span>NEW INNER2</span>');
    });

    it('should change on parent state change', () => {
        state.nested.emit({ inner: 'NEW INNER TEXT', nested2: { inner2: 'NEW NESTED INNER2' } });
        expectHtml(label, '<span>NEW NESTED INNER2</span>');
    });
});
