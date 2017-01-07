import { HtmlTextElementInstance, HtmlElementInstanceBase, ValueAttributes } from './../htmlElementInstance';

export enum InputType {
    text,
}

export class InputHtmlElementInstance extends HtmlTextElementInstance<HTMLInputElement> {

    constructor(public attributes: ValueAttributes, public text: string, public inputType: InputType) {
        super();
        let dom = document.createElement('input');
        dom.type = InputType[inputType];
        this.domElement = dom;
        this.update();
        // console.log('SpanHtmlElementInstance CREATED', this.domElement.innerText, this.attributes, this.text);
    }

    setAttributes(attributes: ValueAttributes): void { this.attributes = attributes; this.update(); }
    setText(text: string): void { this.text = text; this.update(); }

    update() {
        let text = this.text;
        let attributes = this.attributes;
        if (attributes) {
            if (attributes['prefix']) { text = attributes['prefix'] + text; }
            if (attributes['suffix']) { text = text + attributes['suffix']; }
        }

        this.domElement.value = text;
        console.log('InputHtmlElementInstance UPDATED', this.domElement.outerHTML, this.attributes, this.text);
    }
}