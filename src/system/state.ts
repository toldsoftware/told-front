export interface StateData {
    [name: string]: StateData | string | boolean | number;
}

import { StateData } from './state';

export type State<T> = {
[P in keyof T]: State<T[P]> & Subject<T[P]>;
};

export function toState<T extends StateData>(stateData: T, path: string = null, pathObject: any = null): State<T> {
    let s: State<T> = {} as any;

    if (!path) {
        pathObject = stateData;
    }

    path = path || '';

    for (let k of Object.getOwnPropertyNames(pathObject)) {
        let kPath = path + '.' + k;
        let kPathObject = pathObject[k];
        let children: any = {};
        if (typeof kPathObject === 'object') {
            children = toState(stateData, kPath, kPathObject);
        }

        s[k] = { ...children, ...new StatePath(stateData, kPath) };
    }

    return s;
}

export class StatePath<T> implements Subject<T> {
    constructor(private state: T, private path: string) {
    }

    subscribe(subscriber: Subscriber<T>): void {
        // TODO:
    }
    emit(newValue: T): void {
        // TODO:
    }
}