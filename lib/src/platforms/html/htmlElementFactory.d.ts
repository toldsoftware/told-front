import { ElementFactory, ElementInstance, TextElementInstance, ContainerElementInstance, ValueAttributes } from './../../system';
export declare class HtmlElementFactory implements ElementFactory {
    createEmptyElement(name: string, attributes: ValueAttributes): ElementInstance;
    createTextElement(name: string, attributes: ValueAttributes, text: string): TextElementInstance;
    createContainerElement(name: string, attributes: ValueAttributes, children: ElementInstance[]): ContainerElementInstance;
}
