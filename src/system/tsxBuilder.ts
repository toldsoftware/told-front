import { StatePath, StatePathBase, StateSpy } from './state';
import { Action2Base } from './actions';

export type ValueAttributes = { [name: string]: string | number | boolean };

export interface ElementInstance {
    setAttributes(attributes: ValueAttributes): void;
    // setVisibility(isVisible: boolean): void;
    setOnClick(callback: () => void): void;
    setOnTextChange?(callback: (text: string) => void): void;

    setText?(newText: string): void;
    setActionLabel?(label: string): void;
}

export interface ContainerElementInstance extends ElementInstance {
    replaceChildren(children: ElementInstance[]): void;
    insert(i: number, child: ElementInstance): void;
    remove(i: number): void;
}

export interface TextElementInstance extends ElementInstance {
    setText(newText: string): void;
    setActionLabel?(label: string): void;
    setOnTextChange?(callback: (text: string) => void): void;
}

export interface ElementFactory {
    // createEmptyElement(name: string, attributes: ValueAttributes): ElementInstance;
    createTextElement(name: string, attributes: ValueAttributes, text: string): TextElementInstance;
    createContainerElement(name: string, attributes: ValueAttributes, children: ElementInstance[]): ContainerElementInstance;
}

type BuilderAttributes = { [name: string]: any };

// Build platform elements with factory
// Subscribe to data changes and notify platform elements of changes
// Platform elements are entirely passive (and use events)
export class TsxBuilder {
    static instance = new TsxBuilder();
    static factory: ElementFactory;
    static createElement(ctor: any, attributes: any, ...content: any[]): any {
        return TsxBuilder.instance.createElement(ctor, attributes, content);
    };

    private createElement(name: string, attributes: BuilderAttributes, content: any[]): TsxElement {
        console.log('TsxBuilder.createElement START', name, attributes, content);
        // return TsxBuilder.provider.createElement(name, attributes, content);

        if (content.length > 0 && content.every(x => x.elementInstance)) {
            return this.createContainerElement(name, attributes, content as TsxElement[]);
        } else if (content.length === 1) {
            return this.createTextElement(name, attributes, content[0]);
        } else if (!content || !content.length) {
            return this.createEmptyElement(name, attributes);
        }

        throw `TsxBuilder: Unknown Content: "${content}"`;
    }

    private createContainerElement(name: string, attributes: BuilderAttributes, content: TsxElement[]): ContainerTsxElement {
        // console.log('TsxBuilder.createContainerElement START', name, attributes, content);

        let instance = TsxBuilder.factory.createContainerElement(name, attributes, content.map(x => x.elementInstance));

        this.subscribeActions(instance, content);
        return { elementInstance: instance, children: content };
    }

    private createTextElement(name: string, attributes: BuilderAttributes, content: any): TsxElement {
        console.log('TsxBuilder.createTextElement START', name, attributes, content);

        let text = content as string;
        if (content.subscribe) {
            let s = content as StatePath<string>;
            text = s.value;
            s.subscribe(x => {
                instance.setText(x);
            });
        } else if (typeof content === 'string') {
            // console.log('TsxBuilder.createTextElement STRING', content);

        } else if (typeof content === 'function') {
            console.log('TsxBuilder.createTextElement FUNCTION', content);
            text = autoSubscribe<string>(content, x => instance.setText(x));

        } else if (content.label) {
            console.log('TsxBuilder.createTextElement LABEL', content);
            text = content.label;

        } else {
            console.log('TsxBuilder.createTextElement UNKNOWN', content);
        }

        let valueAttributes: ValueAttributes = autoSubscribeAttributes(attributes, x => instance.setAttributes(x));
        console.log('valueAttributes=', valueAttributes);
        let instance = TsxBuilder.factory.createTextElement(name, valueAttributes, text);

        this.subscribeActions(instance, content);
        return { elementInstance: instance };
    }

    private createEmptyElement(name: string, attributes: BuilderAttributes): TsxElement {
        switch (name) {
            case 'wrap':
                return this.createContainerElement(name, attributes, []);
            case 'label':
                return this.createTextElement(name, attributes, []);
        }

        throw `TsxBuilder: Unknown Empty Element Name: "${name}"`;
    }

    private subscribeActions(instance: ElementInstance, content: any) {
        if (content.do) {
            console.log(`subscribeActions START`);

            let action = content as Action2Base;

            if (instance.setActionLabel) {
                console.log(`subscribeActions setActionLabel`);

                instance.setActionLabel(action.label);
            }

            if (instance.setText && action && action.scope && typeof action.scope.value === 'string') {
                console.log(`subscribeActions setText`);

                (action.scope as StatePathBase).subscribe(x => {
                    instance.setText(x);
                });
                instance.setText(action.scope.value);
            }

            if (!action.input) {
                console.log(`subscribeActions setOnClick`);

                instance.setOnClick(() => action.do());
            } else {
                if (instance.setOnTextChange) {
                    instance.setOnTextChange((x) => action.do(x));
                }
            }
        }
    }
}

export class TsxElement implements JSX.Element {
    elementInstance: ElementInstance;
}

export class ContainerTsxElement extends TsxElement {
    elementInstance: ContainerElementInstance;
    children: TsxElement[];
}

function autoSubscribe<T>(valueOrMethod: T | (() => T), setValue: (t: T) => void): T {
    if (typeof valueOrMethod === 'function') {
        let subId = StateSpy.Instance.subscribe_getValue((statePath) => {
            console.log('TsxBuilder.autoSubscribe SUBSCRIBED', statePath._fullPath);

            statePath.subscribe(x => {
                console.log(`statePath '${statePath._fullPath}' CHANGE`, x);
                setValue(valueOrMethod());
            });
        });

        let text = valueOrMethod();
        StateSpy.Instance.unsubscribe_getValue(subId);

        return text;
    } else {
        return valueOrMethod;
    }
}

function autoSubscribeAttributes(attributes: BuilderAttributes, setAttributes: (attributes: ValueAttributes) => void): ValueAttributes {
    if (!attributes) { return null; }

    let a = {} as any;
    for (let k of Object.getOwnPropertyNames(attributes)) {
        a[k] = autoSubscribe(attributes[k], x => {
            a[k] = x;
            setAttributes(a);
        });
    }
    return a;
}