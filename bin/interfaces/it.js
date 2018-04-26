"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var black = chalk_1.default.black, green = chalk_1.default.green, red = chalk_1.default.red;
function default_1(title, callback) {
    try {
        callback();
        console.log("\t" + black.bgGreen(' OK ') + " " + green(title));
    }
    catch (error) {
        console.log("\t" + black.bgRed(' FAIL ') + " " + red(title));
        console.log("\t" + red(error));
    }
}
exports.default = default_1;
//# sourceMappingURL=it.js.map