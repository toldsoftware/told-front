import { StatePathBase } from './state';
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
    name: string;
    label: string;
    constructor(scope: T, params: ActionParams<T, any>);
}
export declare class Action2WithInput<T extends StatePathBase, TInput> extends Action2Base {
    scope: T;
    params: ActionParams<T, TInput>;
    input: TInput;
    name: string;
    label: string;
    constructor(scope: T, params: ActionParams<T, TInput>, input: TInput);
    setName(name: string): void;
    do(input: TInput): void;
}
export declare function toActions2<T>(actions: T): T;
