import { TsxBuilder } from './../../src/tsxBuilder';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('empty label', () => {
    let label = <label></label>;

    it('should become empty span', () => {
        expectHtml(label, '<span></span>');
    });
});

describe('label with text', () => {
    let label = <label>SOME TEXT</label>;

    it('should become span with text', () => {
        expectHtml(label, '<span>SOME TEXT</span>');
    });
});

describe('label with text attributes', () => {
    let label = <label prefix='BEFORE ' suffix=' AFTER'>SOME TEXT</label>;

    it('should become span with prefix and suffix injected', () => {
        expectHtml(label, '<span>BEFORE SOME TEXT AFTER</span>');
    });
});