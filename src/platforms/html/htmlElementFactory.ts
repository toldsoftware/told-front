import { ElementFactory, ElementInstance, TextElementInstance, ContainerElementInstance, ValueAttributes } from './../../system';
import { DivHtmlElementInstance } from './elements/div';
import { SpanHtmlElementInstance } from './elements/span';
import { ButtonHtmlElementInstance } from './elements/button';

export class HtmlElementFactory implements ElementFactory {

    // createEmptyElement(name: string, attributes: ValueAttributes): ElementInstance {
    //     return this.createTextElement(name, attributes, '');
    // }

    createTextElement(name: string, attributes: ValueAttributes, text: string): TextElementInstance {
        console.log('HtmlElementFactory.createTextElement START', name, attributes, text);

        switch (name) {
            case 'label':
                return new SpanHtmlElementInstance(attributes, text);
            case 'button':
                return new ButtonHtmlElementInstance(attributes, text);
        }

        throw `HtmlElementFactory: Unknown Text Element Type: "${name}"`;
    }

    createContainerElement(name: string, attributes: ValueAttributes, children: ElementInstance[]): ContainerElementInstance {
        console.log('HtmlElementFactory.createContainerElement START', name, attributes, children);

        switch (name) {
            case 'wrap':
                return new DivHtmlElementInstance(attributes, children);
        }

        throw `HtmlElementFactory: Unknown Container Element Type: "${name}" children=${children}`;
    }
}