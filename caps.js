'use strict';

// require our events and modules
const events = require('./modules/util/event-pool.js');
require('./modules/util/vendor/vendor.js')
require('./modules/util/driver/driver.js')


// Event listeners => callback
// events on: pickup, in-transit, delivered
events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));

// callback function
function logEvent(event, payload) {
  let time = new Date();
  console.log(`EVENT:`, {event, time, payload});
}
