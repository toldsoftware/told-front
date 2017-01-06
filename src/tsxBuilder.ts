export interface ElementResult {

}

export type Attributes = { [name: string]: any };
export type CreateElementMethod = (name: string, attributes: Attributes, content: any[]) => ElementResult;

export interface TsxBuilderProvider {
    createElement: CreateElementMethod;
}

export class TsxBuilder {
    static provider: TsxBuilderProvider;
    static createElement(name: string, attributes: Attributes, ...content: any[]): ElementResult {
        return TsxBuilder.provider.createElement(name, attributes, content);
    }
}