export declare class SimpleObservable<T> {
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
export declare class SimpleSubject<T> extends SimpleObservable<T> {
    constructor(initialValue: T);
    value: T;
    emit(t: T): void;
}
