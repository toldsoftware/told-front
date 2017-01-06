import { TsxBuilder, ElementResult, Attributes } from './../../system';
import { createDiv } from './elements/div';
import { createSpan } from './elements/span';

export class HtmlTsxBuilder implements TsxBuilder {
    createElement(name: string, attributes: Attributes, content: any[]): ElementResult {
        console.log('HtmlTsxBuilder START', name, attributes, content);

        switch (name) {
            case 'wrap':
                return createDiv(attributes, content);
            case 'label':
                return createSpan(attributes, content);
        }

        throw `Unknown Element Type: "${name}"`;
    }
}