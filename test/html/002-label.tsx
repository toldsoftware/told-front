import { TsxBuilder } from './../../src';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('empty label', () => {
    let label: JSX.Element;
    beforeEach(() => {
        label = <label></label>;
    });

    it('should become empty span', () => {
        expectHtml(label, '<span></span>');
    });
});

describe('label with text', () => {
    let label2: JSX.Element;
    beforeEach(() => {
        label2 = <label>SOME TEXT</label>;
    });

    it('should become span with text', () => {
        expectHtml(label2, '<span>SOME TEXT</span>');
    });
});

describe('label with text attributes', () => {
    let label3: JSX.Element;
    beforeEach(() => {
        label3 = <label prefix='BEFORE ' suffix=' AFTER'>SOME TEXT</label>;
    });

    it('should become span with prefix and suffix injected', () => {
        expectHtml(label3, '<span>BEFORE SOME TEXT AFTER</span>');
    });
});
