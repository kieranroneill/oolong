"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var yellow = chalk_1.default.yellow;
function default_1(title, callback) {
    console.log(yellow("=> " + title));
    callback();
}
exports.default = default_1;
//# sourceMappingURL=Test.js.map