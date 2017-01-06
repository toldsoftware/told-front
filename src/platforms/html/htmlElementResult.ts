import { ElementResult, Attributes } from './../../tsxBuilder';

export { Attributes };

export class HtmlElementResultBase implements ElementResult {
    domElement: HTMLElement;
}

export class HtmlElementResult<T extends HTMLElement> implements HtmlElementResultBase {
    domElement: T;
}