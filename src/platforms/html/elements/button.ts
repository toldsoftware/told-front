import { HtmlTextElementInstance, HtmlElementInstanceBase, ValueAttributes } from './../htmlElementInstance';

export class ButtonHtmlElementInstance extends HtmlTextElementInstance<HTMLButtonElement> {

    constructor(public attributes: ValueAttributes, public text: string) {
        super();
        let dom = document.createElement('button');
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

        this.domElement.innerText = text;
        // console.log('SpanHtmlElementInstance UPDATED', this.domElement.innerText, this.attributes, this.text);
    }
}