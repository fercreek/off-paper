'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  barcode: Number,
  name: String,
  type: String,
  price: Number
});

export default mongoose.model('Product', ProductSchema);
