"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var cyan = chalk_1.default.cyan;
function default_1(title, callback) {
    console.log(cyan("=> " + title));
    callback();
}
exports.default = default_1;
//# sourceMappingURL=when.js.map