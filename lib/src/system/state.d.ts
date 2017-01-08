import { StateData } from './stateStorage';
import { SimpleSubject } from './simpleObservable';
export declare type State<T> = {
    [P in keyof T]: State<T[P]> & StatePath<T[P]>;
};
export declare type SpySubscriber = (statePath: StatePathBase) => void;
export declare class StateSpy {
    static Instance: StateSpy;
    private constructor();
    subscribers_getValue: SpySubscriber[];
    subscribe_getValue(subscriber: SpySubscriber): number;
    unsubscribe_getValue(iSubscriber: number): void;
    notify_getValue(statePath: StatePathBase): void;
}
export declare function toState<T extends StateData>(stateData: T): State<T>;
export interface StatePathBase {
    value: any;
    _fullPath: string;
    subscribe(subscriber: Subscriber<any>): void;
}
export declare class StatePath<T> extends SimpleSubject<T> implements StatePathBase {
    private _key;
    _fullPath: string;
    constructor(_key: string, _initialValue: T, _fullPath: string);
    emit(newValue: T): void;
    value: T;
}
