'use strict';

import mongoose from 'mongoose';
import Card from '../card/card.model';

var PersonSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  first_name: String,
  last_name: String,
  email: String,
  birthdate: Date,
  cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}],
  created_at: Date,
  updated_at: Date
});

PersonSchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

export default mongoose.model('Person', PersonSchema);
