"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
// Utilities.
var Suite_1 = require("../Utilities/Suite");
var black = chalk_1.default.black, green = chalk_1.default.green, red = chalk_1.default.red;
function default_1(description, callback) {
    var suite = Suite_1.default.getInstance();
    try {
        callback();
        console.log(black.bgGreen(' OK ') + " " + green(description));
        suite.success++;
    }
    catch (error) {
        console.log(black.bgRed(' FAIL ') + " " + red(description));
        console.log("" + red(error.stack));
        suite.fail++;
    }
}
exports.default = default_1;
//# sourceMappingURL=It.js.map