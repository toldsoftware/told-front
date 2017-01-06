import { SimpleSubject } from './simpleObservable';

export interface StateData {
    [name: string]: StateData | string | boolean | number;
}

import { StateData } from './state';

export type State<T> = {
[P in keyof T]: State<T[P]> & Subject<T[P]>;
};

export function toState<T extends StateData>(stateData: T, path: string = null, pathValue: any = null): State<T> {
    let s: State<T> = {} as any;

    if (!path) {
        pathValue = stateData;
    }

    path = path || '';

    for (let k of Object.getOwnPropertyNames(pathValue)) {
        let kPath = path + '.' + k;
        let kPathValue = pathValue[k];

        let kObj = new StatePath(stateData, kPath, kPathValue) as any;
        if (typeof kPathValue === 'object') {
            let childValues = toState(stateData, kPath, kPathValue);
            for (let c in childValues) {
                kObj[c] = childValues[c];
            }
        }

        s[k] = kObj;
    }

    return s;
}

export class StatePath<T> extends SimpleSubject<T> {
    constructor(private state: T, private path: string, initialValue: T) {
        super(initialValue);
    }
}