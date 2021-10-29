"use strict";

const events = require("../event-pool");
// const { pickedUp, inTransit, packageDelivered } = require('./driver-handler');

// events.emit('pickup', pickedUp);
// events.emit('pickup', packageDelivered);

events.on("pickup", manageDelivery);

function manageDelivery(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
  }, 1000);

  setTimeout(() => {
    events.emit("in-transit", payload);
  }, 1500);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    events.emit("delivered", payload);
  }, 1700);
}

module.exports = { manageDelivery };
