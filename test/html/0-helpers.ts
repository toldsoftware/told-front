import { TsxBuilder, TsxElement, ElementFactory, ElementInstance } from './../../src';
import { HtmlElementFactory } from './../../src/platforms/html/htmlElementFactory';
import { HtmlElementInstanceBase } from './../../src/platforms/html/htmlElementInstance';

let factory: ElementFactory;
export function initPlatform() {
    TsxBuilder.factory = factory = factory || new HtmlElementFactory();
}

export function toHtml(element: JSX.Element): string {
    return ((element as TsxElement).elementInstance as HtmlElementInstanceBase).domElement.outerHTML;
}

export function expectHtml(element: JSX.Element, expected: string) {
    let actual = toHtml(element);
    let normExpected = expected.replace(/\s+/g, ' ');
    let normActual = actual.replace(/\s+/g, ' ');
    expect(normActual).toBe(normExpected);
}

export function raiseOnChange(element: HTMLElement) {
    if ('createEvent' in document) {
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', false, true);
        element.dispatchEvent(evt);
    }
    else {
        (element as any)['fireEvent']('onchange');
    }

}