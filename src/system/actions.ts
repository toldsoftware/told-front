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
