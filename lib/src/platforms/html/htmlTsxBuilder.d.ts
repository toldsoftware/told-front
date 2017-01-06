import { TsxBuilder } from './../../tsxBuilder';
export declare class HtmlTsxBuilder implements TsxBuilder {
    createElement(ctor: {
        new (): any;
        name: string;
    } | string, attributes: any[], ...content: any[]): any;
}
