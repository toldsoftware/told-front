import { TsxBuilder, TsxBuilderProvider, ElementResult } from './../../src';
import { HtmlTsxBuilder } from './../../src/platforms/html/htmlTsxBuilder';
import { HtmlElementResultBase } from './../../src/platforms/html/htmlElementResult';

let provider: HtmlTsxBuilder;
export function initPlatform() {
    TsxBuilder.provider = provider = provider || new HtmlTsxBuilder();
}

export function toHtml(element: ElementResult): string {
    return (element as HtmlElementResultBase).domElement.outerHTML;
}

export function expectHtml(element: ElementResult, expected: string) {
    let actual = toHtml(element);
    let normExpected = expected.replace(/\s+/g, ' ');
    let normActual = actual.replace(/\s+/g, ' ');
    expect(normActual).toBe(normExpected, 'actual=' + normActual);
}