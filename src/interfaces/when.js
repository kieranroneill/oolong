export default function(title, callback) {
    console.log(`=> ${title}`.cyan);

    callback();
}