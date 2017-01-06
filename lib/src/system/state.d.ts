import { SimpleSubject } from './simpleObservable';
export interface StateData {
    [name: string]: StateData | string | boolean | number;
}
import { StateData } from './state';
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
    _fullPath: string;
    subscribe(subscriber: Subscriber<any>): void;
}
export declare class StatePath<T> extends SimpleSubject<T> implements StatePathBase {
    private _key;
    _fullPath: string;
    constructor(_key: string, _initialValue: T, _fullPath: string);
    emit(newValue: T): void;
    readonly value: T;
}
