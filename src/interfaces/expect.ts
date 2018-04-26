export default function(equality: any): boolean {
    if (equality) {
        return true;
    }

    throw new Error('Assertion failed.');
}
