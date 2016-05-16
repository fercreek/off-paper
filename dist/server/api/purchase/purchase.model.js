'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurchaseSchema = new _mongoose2.default.Schema({
  products: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Product' }],
  payment: String, //Cash, Credit, Debit
  tax: Number,
  amount: Number,
  total_amount: Number,
  created_at: Date,
  updated_at: Date
});

exports.default = _mongoose2.default.model('Purchase', PurchaseSchema);
//# sourceMappingURL=purchase.model.js.map
