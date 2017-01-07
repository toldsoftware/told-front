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
