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


describe('label with calculation content', () => {
    let stateData = { count: 0 };
    let state = toState(stateData);
    let label = <label>{() => state.count.value + (state.count.value === 1 ? ' item left' : ' items left')}</label>;

    it('should show correct suffix at 0', () => {
        expectHtml(label, '<span>0 items left</span>');
    });

    it('should show correct suffix at 1', () => {
        state.count.emit(1);
        expectHtml(label, '<span>1 item left</span>');
    });

    it('should show correct suffix at 2', () => {
        state.count.emit(2);
        expectHtml(label, '<span>2 items left</span>');
    });

});

describe('label with calculation attribute', () => {
    let stateData = { count: 0 };
    let state = toState(stateData);
    let label = <label suffix={() => (state.count.value === 1 ? ' item left' : ' items left')}>{state.count}</label>;

    it('should show correct suffix at 0', () => {
        expectHtml(label, '<span>0 items left</span>');
    });

    it('should show correct suffix at 1', () => {
        state.count.emit(1);
        expectHtml(label, '<span>1 item left</span>');
    });

    it('should show correct suffix at 2', () => {
        state.count.emit(2);
        expectHtml(label, '<span>2 items left</span>');
    });

});
