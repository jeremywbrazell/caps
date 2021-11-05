'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('in-transit', (payload) => {
    console.log(`Order in-transit, ${payload.customer}`);
});

socket.on('thank-you', (payload) => {
    console.log(`Thanks for delivering, ${payload.store}`);
});