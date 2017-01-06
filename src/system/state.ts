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

        let kObj = new StatePath(k, kPathValue, stateData, kPath) as any;
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
    constructor(private _key: string, _initialValue: T, private _originalState: any, private _fullPath: string) {
        super(_initialValue);
    }

    emit(newValue: T) {
        this.setValue(newValue);

        // Emit new values into all children
        let keys = Object.getOwnPropertyNames(this).filter(x => !x.match(/^_/));
        console.log(`StatePath.emit: keys="${keys}"`); // , newValue="${newValue}", this="${this}""`);

        for (let k of keys) {
            console.log(`StatePath.emit: [key]="${k}"`);
            (this as any)[k].emit((newValue as any)[k]);
        }
    }
}