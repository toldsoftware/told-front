export declare type CreateElementMethod = (ctor: {
    new (): any;
    name: string;
} | string, attributes: any[], ...content: any[]) => any;
export interface TsxBuilderProvider {
    createElement: CreateElementMethod;
}
export declare class TsxBuilder {
    static provider: TsxBuilderProvider;
    static createElement(ctor: {
        new (): any;
        name: string;
    } | string, attributes: any[], ...content: any[]): any;
}
