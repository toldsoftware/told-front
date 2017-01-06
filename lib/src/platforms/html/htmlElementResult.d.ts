import { ElementResult, Attributes } from './../../system';
export { Attributes };
export declare class HtmlElementResultBase implements ElementResult {
    domElement: HTMLElement;
}
export declare class HtmlElementResult<T extends HTMLElement> implements HtmlElementResultBase {
    domElement: T;
}
