export function delay(timeMs: number) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => resolve(), timeMs);
    });
}