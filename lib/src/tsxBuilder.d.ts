export interface ElementResult {
}
export declare type Attributes = {
    [name: string]: any;
};
export declare type CreateElementMethod = (name: string, attributes: Attributes, content: any[]) => ElementResult;
export interface TsxBuilderProvider {
    createElement: CreateElementMethod;
}
export declare class TsxBuilder {
    static provider: TsxBuilderProvider;
    static createElement(name: string, attributes: Attributes, ...content: any[]): ElementResult;
}
