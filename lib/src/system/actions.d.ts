import { StatePathBase, State } from './state';
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
export declare type Actions<T> = {
    [P in keyof T]: Action;
};
export declare function toActions<T extends ActionsRaw>(actionsRaw: T): Actions<T>;
export declare class Action {
    name: string;
    private actionRaw;
    label: string;
    constructor(name: string, actionRaw: ActionRaw);
    do(...input: any[]): void;
}
export interface ActionParams<T, TInput> {
    do: (t: T, input?: TInput) => any;
    at?: (t: T) => boolean;
    nat?: (t: T) => any;
    pre?: (t: T) => any;
    input?: (t: T) => TInput;
    post?: (t: T) => boolean;
}
export declare class ArrayParams<T> {
    forEach(callback: (t: State<T>) => void): void;
}
export declare function actionArray<T>(scope: State<T[]>, params: ActionParams<ArrayParams<T>, any>): Action2Array<State<T>>;
export declare function actionArrayItems<T>(scope: State<T[]>, params: ActionParams<State<T> & {
    arrayIndex: number;
    arrayValue: T[];
}, any>): Action2ArrayItems<State<T>>;
export declare function action<T extends StatePathBase>(scope: T, params: ActionParams<T, any>): Action2NoInput<T>;
export declare function actionWithInput<T extends StatePathBase, TInput>(scope: T, input: TInput, params: ActionParams<T, TInput>): Action2WithInput<T, TInput>;
export declare class Action2Base {
    scope: StatePathBase;
    params: ActionParams<any, any>;
    input: any;
    name: string;
    label: string;
    constructor(scope: StatePathBase, params: ActionParams<any, any>, input?: any);
    setName(name: string): void;
    do(input?: any): void;
}
export declare class Action2NoInput<T extends StatePathBase> extends Action2Base {
    scope: T;
    params: ActionParams<T, any>;
    constructor(scope: T, params: ActionParams<T, any>);
}
export declare class Action2WithInput<T extends StatePathBase, TInput> extends Action2Base {
    scope: T;
    params: ActionParams<T, TInput>;
    input: TInput;
    constructor(scope: T, params: ActionParams<T, TInput>, input: TInput);
    do(input: TInput): void;
}
export declare class Action2Array<T> extends Action2Base {
    scopeArray: State<T[]>;
    params: ActionParams<T, any>;
    constructor(scopeArray: State<T[]>, params: ActionParams<T, any>);
}
export declare class Action2ArrayItems<T> extends Action2Base {
    scopeArray: State<T[]>;
    params: ActionParams<T, any>;
    constructor(scopeArray: State<T[]>, params: ActionParams<T, any>);
}
export declare function toActions2<T>(actions: T): T;
