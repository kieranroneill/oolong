"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
// Utilities.
var Suite_1 = require("../Utilities/Suite");
var green = chalk_1.default.green, red = chalk_1.default.red, yellow = chalk_1.default.yellow, white = chalk_1.default.white;
function default_1(title, callback) {
    var suite = Suite_1.default.getInstance();
    var isOuterInterface = (suite.fail <= 0 && suite.success <= 0);
    var exitCode = 0;
    console.log(yellow("" + title));
    callback();
    if (isOuterInterface) {
        console.log(white("\n.......\n"));
        console.log(white('Test summary:\n'));
        console.log(green("  Success: " + suite.success));
        console.log(red("  Fail: " + suite.fail));
        if (suite.fail > 0) {
            exitCode = 1;
        }
        suite.reset();
        return process.exit(exitCode);
    }
}
exports.default = default_1;
//# sourceMappingURL=Describe.js.map