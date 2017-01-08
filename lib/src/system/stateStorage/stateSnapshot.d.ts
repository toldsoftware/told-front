export declare let DELETE: any;
export interface StateSnapshot {
    [name: string]: StateSnapshot[] | StateSnapshot | string | boolean | number;
}
export declare function mergeChanges<T extends StateSnapshot>(changes: T[]): T;
