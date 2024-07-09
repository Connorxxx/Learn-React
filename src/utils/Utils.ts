
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

String.prototype.isEmpty = function (): boolean {
    return this.length === 0;
};