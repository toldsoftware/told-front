import { StatePath, StatePathBase, State } from './state';
import { toTitle } from './stringHelpers';

export interface ActionRaw {
    do: (...input: any[]) => any;
    at?: () => boolean;
    nat?: () => any;
    pre?: () => any;
    input?: () => any;
    post?: () => boolean;
}

export interface ActionsRaw {
    [name: string]: ActionRaw;
}

export type Actions<T> = {
[P in keyof T]: Action;
};

export function toActions<T extends ActionsRaw>(actionsRaw: T): Actions<T> {
    let a = {} as any;

    for (let k of Object.getOwnPropertyNames(actionsRaw)) {
        let aRaw = actionsRaw[k];
        a[k] = new Action(k, aRaw);
    }

    return a;
}

export class Action {
    label: string;
    constructor(public name: string, private actionRaw: ActionRaw) {
        this.label = toTitle(name);
    }

    do(...input: any[]) {
        this.actionRaw.do(...input);
    }
}


export interface ActionParams<T, TInput> {
    do: (t: T, input?: TInput) => any;
    at?: (t: T) => boolean;
    nat?: (t: T) => any;
    pre?: (t: T) => any;
    input?: (t: T) => TInput;
    post?: (t: T) => boolean;
}

export class ArrayParams<T>{
    forEach(callback: (t: State<T>) => void): void {

    }
}

export function actionArray<T>(scope: State<T[]>, params: ActionParams<ArrayParams<T>, any>): Action2Array<State<T>> {
    // return new Action2Array<State<T>>(scope, params);
    throw 'Not Implmeneted';
}

export function actionArrayItems<T>(scope: State<T[]>, params: ActionParams<State<T> & { arrayIndex: number, arrayValue: T[] }, any>): Action2ArrayItems<State<T>> {
    // return new Action2Array<State<T>>(scope, params);
    throw 'Not Implmeneted';
}

export function action<T extends StatePathBase>(scope: T, params: ActionParams<T, any>): Action2NoInput<T> {
    return new Action2NoInput(scope, params);
}

export function actionWithInput<T extends StatePathBase, TInput>(scope: T, input: TInput, params: ActionParams<T, TInput>): Action2WithInput<T, TInput> {
    return new Action2WithInput(scope, params, input);
}

export class Action2Base {
    name: string;
    label: string;

    constructor(public scope: StatePathBase, public params: ActionParams<any, any>, public input?: any) {
    }

    setName(name: string) {
        this.name = name;
        this.label = toTitle(name);
    }

    do(input?: any) {
        this.params.do(this.scope, input);
    }
}

export class Action2NoInput<T extends StatePathBase> extends Action2Base {
    constructor(public scope: T, public params: ActionParams<T, any>) {
        super(scope, params);
    }
}


export class Action2WithInput<T extends StatePathBase, TInput> extends Action2Base {
    constructor(public scope: T, public params: ActionParams<T, TInput>, public input: TInput) {
        super(scope, params, input);
    }

    do(input: TInput) {
        this.params.do(this.scope, input);
    }
}

export class Action2Array<T> extends Action2Base {
    constructor(public scopeArray: State<T[]>, public params: ActionParams<T, any>) {
        super(scopeArray as any, params);
    }
}

export class Action2ArrayItems<T> extends Action2Base {
    constructor(public scopeArray: State<T[]>, public params: ActionParams<T, any>) {
        super(scopeArray as any, params);
    }
}

export function toActions2<T>(actions: T): T {
    for (let k of Object.getOwnPropertyNames(actions)) {
        (actions as any)[k].setName(k);
    }

    return actions;
}