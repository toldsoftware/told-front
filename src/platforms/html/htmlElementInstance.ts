import { ElementInstance, TextElementInstance, ContainerElementInstance, ValueAttributes } from './../../system';

export { ValueAttributes };

export abstract class HtmlElementInstanceBase implements ElementInstance {
    domElement: HTMLElement;
    abstract setAttributes(attributes: ValueAttributes): void;

    setOnClick(callback: () => void) {
        let c = callback;

        // Debounce
        let call = () => {
            c && c();
            c = null;
            setTimeout(() => c = callback, 250);
        };

        this.domElement.onclick = call;
        this.domElement.ontouchstart = call;
    }
}

export abstract class HtmlElementInstance<T extends HTMLElement> extends HtmlElementInstanceBase {
    domElement: T;
}

export abstract class HtmlContainerElementInstance<T extends HTMLElement> extends HtmlElementInstance<T> implements ContainerElementInstance {
    abstract replaceChildren(children: HtmlElementInstanceBase[]): void;
    abstract insert(i: number, child: HtmlElementInstanceBase): void;
    abstract remove(i: number): void;
}

export abstract class HtmlTextElementInstance<T extends HTMLElement> extends HtmlElementInstance<T> implements TextElementInstance {
    abstract setText(text: string): void;
}