'use strict';

import mongoose from 'mongoose';

var CardSchema = new mongoose.Schema({
  uuid: String,
  type: String
});

export default mongoose.model('Card', CardSchema);
