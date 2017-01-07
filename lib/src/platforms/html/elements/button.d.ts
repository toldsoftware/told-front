import { HtmlTextElementInstance, ValueAttributes } from './../htmlElementInstance';
export declare class ButtonHtmlElementInstance extends HtmlTextElementInstance<HTMLButtonElement> {
    attributes: ValueAttributes;
    text: string;
    constructor(attributes: ValueAttributes, text: string);
    setAttributes(attributes: ValueAttributes): void;
    setText(text: string): void;
    setActionLabel(text: string): void;
    update(): void;
}
