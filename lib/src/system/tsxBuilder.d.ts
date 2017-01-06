export declare type ValueAttributes = {
    [name: string]: string | number | boolean;
};
export interface ElementInstance {
    setAttributes(attributes: ValueAttributes): void;
}
export interface ContainerElementInstance extends ElementInstance {
    replaceChildren(children: ElementInstance[]): void;
    insert(i: number, child: ElementInstance): void;
    remove(i: number): void;
}
export interface TextElementInstance extends ElementInstance {
    setText(newText: string): void;
}
export interface ElementFactory {
    createEmptyElement(name: string, attributes: ValueAttributes): ElementInstance;
    createTextElement(name: string, attributes: ValueAttributes, text: string): TextElementInstance;
    createContainerElement(name: string, attributes: ValueAttributes, children: ElementInstance[]): ContainerElementInstance;
}
export declare class TsxBuilder {
    static instance: TsxBuilder;
    static factory: ElementFactory;
    static createElement(ctor: any, attributes: any, ...content: any[]): any;
    private createElement(name, attributes, content);
    private createContainerElement(name, attributes, content);
    private createTextElement(name, attributes, content);
    private createEmptyElement(name, attributes);
}
export declare class TsxElement implements JSX.Element {
    elementInstance: ElementInstance;
}
export declare class ContainerTsxElement extends TsxElement {
    elementInstance: ContainerElementInstance;
}
