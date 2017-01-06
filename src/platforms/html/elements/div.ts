import { HtmlContainerElementInstance, HtmlElementInstanceBase, ValueAttributes } from './../htmlElementInstance';

export class DivHtmlElementInstance extends HtmlContainerElementInstance<HTMLDivElement>{
    constructor(attributes: ValueAttributes, content: any[]) {
        super();

        let dom = document.createElement('div');
        for (let x of content as HtmlElementInstanceBase[]) {
            dom.appendChild(x.domElement);
        }

        this.domElement = dom;
    }

    setAttributes(attributes: ValueAttributes): void { throw 'Not Implemenented'; }
    replaceChildren(children: HtmlElementInstanceBase[]): void { throw 'Not Implemenented'; }
    insert(i: number, child: HtmlElementInstanceBase): void { throw 'Not Implemenented'; }
    remove(i: number): void { throw 'Not Implemenented'; }
}