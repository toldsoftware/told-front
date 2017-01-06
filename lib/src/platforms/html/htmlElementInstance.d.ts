import { ElementInstance, TextElementInstance, ContainerElementInstance, ValueAttributes } from './../../system';
export { ValueAttributes };
export declare abstract class HtmlElementInstanceBase implements ElementInstance {
    domElement: HTMLElement;
    abstract setAttributes(attributes: ValueAttributes): void;
}
export declare abstract class HtmlElementInstance<T extends HTMLElement> extends HtmlElementInstanceBase {
    domElement: T;
}
export declare abstract class HtmlContainerElementInstance<T extends HTMLElement> extends HtmlElementInstance<T> implements ContainerElementInstance {
    abstract replaceChildren(children: HtmlElementInstanceBase[]): void;
    abstract insert(i: number, child: HtmlElementInstanceBase): void;
    abstract remove(i: number): void;
}
export declare abstract class HtmlTextElementInstance<T extends HTMLElement> extends HtmlElementInstance<T> implements TextElementInstance {
    abstract setText(text: string): void;
}
