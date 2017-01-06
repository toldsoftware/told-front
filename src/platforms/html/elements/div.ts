import { HtmlElementResult, HtmlElementResultBase, Attributes } from './../htmlElementResult';

export function createDiv(attributes: Attributes, content: any[]): HtmlElementResult<HTMLDivElement> {
    // console.log('createDiv START', content);

    let dom = document.createElement('div');
    for (let x of content as HtmlElementResultBase[]) {
        dom.appendChild(x.domElement);
    }

    return { domElement: dom };
}