
export function toTitle(text: string) {
    return text
        .replace(/^[a-z]/, v => v.toUpperCase())
        .replace(/[A-Z]/g, v => ' ' + v)
        .trim();
}