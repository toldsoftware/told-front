import { StateData } from './stateStorage';
import { SimpleSubject } from './simpleObservable';

export type State<T> = {
[P in keyof T]: State<T[P]> & StatePath<T[P]>;
};

// export type StateArray<T, U> = {
// [P in keyof T]: State<T[P]> & StatePath<T[P]> & StatePathArray<U>;
// }


export type SpySubscriber = (statePath: StatePathBase) => void;

export class StateSpy {
    static Instance: StateSpy = new StateSpy();
    private constructor() { }

    subscribers_getValue: SpySubscriber[] = [];
    subscribe_getValue(subscriber: SpySubscriber) {
        return this.subscribers_getValue.push(subscriber) - 1;
    }
    unsubscribe_getValue(iSubscriber: number) {
        this.subscribers_getValue[iSubscriber] = null;
    }
    notify_getValue(statePath: StatePathBase) {
        for (let x of this.subscribers_getValue) {
            if (x) {
                x(statePath);
            }
        }
    }
};

export function toState<T extends StateData>(stateData: T): State<T> {
    return toStateInner(stateData, '', stateData);
}

function toStateInner<T extends StateData>(stateData: T, path: string, pathValue: any): State<T> {
    let s: State<T> = {} as any;

    for (let k of Object.getOwnPropertyNames(pathValue)) {
        let kFullPath = path + '.' + k;
        let kPathValue = pathValue[k];

        let statePath = new StatePath(k, kPathValue, kFullPath);
        // statePath.subscribe(x => spy(statePath, x));

        let kObj = statePath as any; // , stateData, kPath) as any;
        if (typeof kPathValue === 'object') {
            let childValues = toStateInner(stateData, kFullPath, kPathValue);
            for (let c in childValues) {
                kObj[c] = childValues[c];
            }
        }


        s[k] = kObj;
    }

    return s;
}

export interface StatePathBase {
    value: any;
    _fullPath: string;
    subscribe(subscriber: Subscriber<any>): void;
}

export class StatePath<T> extends SimpleSubject<T> implements StatePathBase {
    constructor(private _key: string, _initialValue: T, public _fullPath: string) {// , private _originalState: any) {
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

    get value() {
        StateSpy.Instance.notify_getValue(this);
        return this._value;
    }

    set value(v: T) {
        this.emit(v);
    }

    // For Arrays
    // get 0(): any { throw ''; }
    // forEach(callback: (x: any) => void): void {
    //     throw 'Not Implemented';
    // }
}

// export class StatePathArray<T>{
//     // For Arrays
//     // get 0(): any { throw ''; }
//     // forEach(callback: (x: any) => void): void {
//     //     throw 'Not Implemented';
//     // }

//     onlyArrays: number;
// }