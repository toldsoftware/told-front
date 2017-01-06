export declare type Subscriber<T> = (value: T, oldValue: T) => void;
export declare class Observable<T> {
    private _history;
    readonly history: T[];
    private _value;
    readonly currentValue: T;
    private _subscribers;
    constructor(initialValue: T);
    protected setValue(newValue: T): void;
    subscribe(callback: Subscriber<T>): number;
    unsubscribe(iSubscriber: number): void;
}
