export default function(title, callback) {
    try{
        callback();

        console.log(`\u0009${' OK '.bgGreen.black} ${title.green}`);
    } catch(e) {
        console.log(`\u0009${' FAIL '.bgRed.black} ${title.red}`);
        console.log(`\u0009${e.stack.red}`);
    }
}
