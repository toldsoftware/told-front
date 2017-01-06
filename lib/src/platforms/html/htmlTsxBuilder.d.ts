import { TsxBuilder, ElementResult, Attributes } from './../../tsxBuilder';
export declare class HtmlTsxBuilder implements TsxBuilder {
    createElement(name: string, attributes: Attributes, content: any[]): ElementResult;
}
