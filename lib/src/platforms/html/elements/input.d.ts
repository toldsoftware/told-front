import { HtmlTextElementInstance, ValueAttributes } from './../htmlElementInstance';
export declare enum InputType {
    text = 0,
}
export declare class InputHtmlElementInstance extends HtmlTextElementInstance<HTMLInputElement> {
    attributes: ValueAttributes;
    text: string;
    inputType: InputType;
    constructor(attributes: ValueAttributes, text: string, inputType: InputType);
    setAttributes(attributes: ValueAttributes): void;
    setText(text: string): void;
    update(): void;
}
