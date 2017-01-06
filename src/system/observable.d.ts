declare type Subscriber<T> = (value: T, oldValue: T) => void;
declare interface Observable<T> {
    subscribe(callback: Subscriber<T>): void;
}
declare interface Subject<T> extends Observable<T> {
    emit(newValue: T): void;
}

