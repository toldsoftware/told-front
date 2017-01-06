import { SimpleSubject } from './simpleObservable';
export interface StateData {
    [name: string]: StateData | string | boolean | number;
}
import { StateData } from './state';
export declare type State<T> = {
    [P in keyof T]: State<T[P]> & Subject<T[P]>;
};
export declare function toState<T extends StateData>(stateData: T, path?: string, pathValue?: any): State<T>;
export declare class StatePath<T> extends SimpleSubject<T> {
    private _key;
    private _originalState;
    private _fullPath;
    constructor(_key: string, _initialValue: T, _originalState: any, _fullPath: string);
    emit(newValue: T): void;
}
