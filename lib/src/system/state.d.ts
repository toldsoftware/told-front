export interface StateData {
    [name: string]: StateData | string | boolean | number;
}
import { StateData } from './state';
export declare type State<T> = {
    [P in keyof T]: State<T[P]>;
};
export declare function toState<T extends StateData>(stateData: T): State<T>;
