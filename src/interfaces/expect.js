export default function(equality) {
    if (equality) {
        return true;
    }

    throw new Error('Assertion failed.');
}
