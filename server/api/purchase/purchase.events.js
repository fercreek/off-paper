/**
 * Purchase model events
 */

'use strict';

import {EventEmitter} from 'events';
import Purchase from './purchase.model';
var PurchaseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PurchaseEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Purchase.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PurchaseEvents.emit(event + ':' + doc._id, doc);
    PurchaseEvents.emit(event, doc);
  }
}

export default PurchaseEvents;
