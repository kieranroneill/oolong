"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suite = /** @class */ (function () {
    function Suite() {
        this.fail = 0;
        this.success = 0;
    }
    Suite.getInstance = function () {
        if (Suite.instance === null) {
            Suite.instance = new Suite();
        }
        return Suite.instance;
    };
    /**
     * Resets the test counters to default values.
     */
    Suite.prototype.reset = function () {
        this.fail = 0;
        this.success = 0;
    };
    Suite.instance = null;
    return Suite;
}());
exports.default = Suite;
//# sourceMappingURL=Suite.js.map