'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = new _mongoose2.default.Schema({
  barcode: Number,
  name: String,
  type: String,
  price: Number
});

exports.default = _mongoose2.default.model('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map
