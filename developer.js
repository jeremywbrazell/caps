'use strict';

// Event Hub

const events = require('./modules/util/event-pool.js');

// Require our body parts ... they will hear our events
const vendor = require('./modules/util/vendor/vendor.js');
const driver = require('./modules/util/driver/driver.js');

// For now, we're a dumb brain, only caring about a single event.
// this one, comes to us from the eyes every time they blink.
// When it happens, we need to tell the rest of the body the new brightness
// so that each part can respond as it feels like

// The event handler takes in an event, and a callback to run.
// Callback can be writen inline as shown, or as a reference to a function
events.on('pickup', (payload) => {
  events.emit('pickup', { event: payload })
});