import { HtmlContainerElementInstance, HtmlElementInstanceBase, ValueAttributes } from './../htmlElementInstance';
export declare class DivHtmlElementInstance extends HtmlContainerElementInstance<HTMLDivElement> {
    constructor(attributes: ValueAttributes, content: any[]);
    setAttributes(attributes: ValueAttributes): void;
    replaceChildren(children: HtmlElementInstanceBase[]): void;
    insert(i: number, child: HtmlElementInstanceBase): void;
    remove(i: number): void;
}
