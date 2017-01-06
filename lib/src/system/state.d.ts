export interface StateData {
    [name: string]: StateData | string | boolean | number;
}
import { StateData } from './state';
export declare type State<T> = {
    [P in keyof T]: State<T[P]> & Subject<T[P]>;
};
export declare function toState<T extends StateData>(stateData: T, path?: string, pathObject?: any): State<T>;
export declare class StatePath<T> implements Subject<T> {
    private state;
    private path;
    constructor(state: T, path: string);
    subscribe(subscriber: Subscriber<T>): void;
    emit(newValue: T): void;
}
