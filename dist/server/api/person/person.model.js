'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _card = require('../card/card.model');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonSchema = new _mongoose2.default.Schema({
  username: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  email: String,
  birthdate: Date,
  cards: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Card' }],
  created_at: Date,
  updated_at: Date
});

PersonSchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at) this.created_at = currentDate;

  next();
});

exports.default = _mongoose2.default.model('Person', PersonSchema);
//# sourceMappingURL=person.model.js.map
