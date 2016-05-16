'use strict';

import mongoose from 'mongoose';

var PurchaseSchema = new mongoose.Schema({
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  payment: String, //Cash, Credit, Debit
  tax: Number,
  amount: Number,
  total_amount: Number,
  created_at: Date,
  updated_at: Date
});

export default mongoose.model('Purchase', PurchaseSchema);
