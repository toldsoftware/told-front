import { Subscriber } from './observable';

export interface StateData {
    [name: string]: StateData | string | boolean | number;
}

import { StateData } from './state';

// export interface StatePath {
//     stateData: any;
//     statePath: string;
//     [key: string]: StatePath;
// }

export type State<T> = {
[P in keyof T]: State<T[P]> & ({ subscribe: (subscriber: Subscriber<T[P]>) => void; emit: (newValue: T[P]) => void });
};

export function toState<T extends StateData>(stateData: T): State<T> {
    let s: State<T> = {} as any;

    for (let k in stateData) {
        // if (typeof stateData[k] === 'Object') {
        //     s[k] = new Observable(toState(stateData[k] as any));
        // } else {
        //     s[k] = new Observable(stateData[k]);
        // }
    }

    return s;
}