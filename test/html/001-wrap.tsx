import { TsxBuilder } from './../../src';
import { initPlatform, expectHtml } from './0-helpers';

initPlatform();

describe('wrap', () => {
    let wrap = <wrap></wrap>;

    it('should become div', () => {
        expectHtml(wrap, '<div></div>');
    });
});

describe('wrap nested', () => {
    let wrap2 = <wrap><wrap></wrap></wrap>;
    let wrap3 = <wrap><wrap><wrap></wrap></wrap></wrap>;

    it('should become nested divs (2 deep)', () => {
        expectHtml(wrap2, '<div><div></div></div>');
    });

    it('should become nested divs (3 deep)', () => {
        expectHtml(wrap3, '<div><div><div></div></div></div>');
    });
});