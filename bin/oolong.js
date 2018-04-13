'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.it = undefined;

var _it = require('./interfaces/it');

Object.defineProperty(exports, 'it', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_it).default;
  }
});

var _test = require('./interfaces/test');

Object.defineProperty(exports, 'test', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_test).default;
  }
});

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }