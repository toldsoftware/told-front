import { HtmlTextElementInstance, ValueAttributes } from './../htmlElementInstance';
export declare class SpanHtmlElementInstance extends HtmlTextElementInstance<HTMLSpanElement> {
    attributes: ValueAttributes;
    text: string;
    constructor(attributes: ValueAttributes, text: string);
    setAttributes(attributes: ValueAttributes): void;
    setText(text: string): void;
    update(): void;
}
