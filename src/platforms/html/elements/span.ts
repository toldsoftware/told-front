import { HtmlElementResult, HtmlElementResultBase, Attributes } from './../htmlElementResult';

export function createSpan(attributes: Attributes, content: any[]): HtmlElementResult<HTMLSpanElement> {
    // console.log('createSpan START', content);
    if (content.length > 1) { throw 'label can only have one content item'; }

    let dom = document.createElement('span');

    let text = '';

    if (content.length) {
        text = content[0];
    }

    if (attributes) {
        if (text && attributes['prefix']) { text = attributes['prefix'] + text; }
        if (text && attributes['suffix']) { text = text + attributes['suffix']; }
    }

    dom.innerText = text;

    return { domElement: dom };
}