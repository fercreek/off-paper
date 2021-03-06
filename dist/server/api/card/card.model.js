'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardSchema = new _mongoose2.default.Schema({
  uuid: String,
  type: String
});

exports.default = _mongoose2.default.model('Card', CardSchema);
//# sourceMappingURL=card.model.js.map
