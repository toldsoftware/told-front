type Value<T> = T | (() => T) | Observable<T>;

declare class TsxBuilder { }
declare namespace JSX {
    interface Element {
    }

    interface ContainerElement extends Element {
        items?: Value<any[]>;
    }

    interface LabelElement extends Element {
        prefix?: Value<string>;
        suffix?: Value<string>;
    }

    interface TextElement extends Element {
        placeholder?: Value<string>;
    }

    interface IntrinsicElements {
        // Containers
        wrap: ContainerElement;
        panel: ContainerElement;
        header: ContainerElement;
        footer: ContainerElement;
        stack: ContainerElement;
        shelf: ContainerElement;
        spacer: Element;

        // Display
        heading: LabelElement;
        label: LabelElement;

        // Inputs
        textbox: TextElement;
        checkbox: LabelElement;
        button: LabelElement;
    }
}