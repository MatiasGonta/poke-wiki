export function extractIndex(url: string) {
    const match = url.match(/\/(\d+)\/$/)!;
    return parseInt(match[1], 10);
}