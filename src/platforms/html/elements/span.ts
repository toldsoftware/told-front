import { HtmlTextElementInstance, HtmlElementInstanceBase, ValueAttributes } from './../htmlElementInstance';

export class SpanHtmlElementInstance extends HtmlTextElementInstance<HTMLSpanElement> {

    constructor(public attributes: ValueAttributes, public text: string) {
        super();
        let dom = document.createElement('span');
        this.domElement = dom;
        this.update();
    }

    setAttributes(attributes: ValueAttributes): void { this.attributes = attributes; this.update(); }
    setText(text: string): void { this.text = text; this.update(); }

    update() {
        let text = this.text;
        let attributes = this.attributes;
        if (attributes) {
            if (text && attributes['prefix']) { text = attributes['prefix'] + text; }
            if (text && attributes['suffix']) { text = text + attributes['suffix']; }
        }

        this.domElement.innerText = text;
    }
}