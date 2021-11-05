'use strict';

// connecting to socket.io as a client
const io = require('socket.io-client');
//connect to the HUB!!!
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {
        console.log('pickup', payload.orderID);
      
});

socket.on('in-transit', (payload) => {
    console.log('in-transit', payload.orderID);
   
});

socket.on('delivered', (payload) => {
    console.log('delivered', payload.orderID);
    socket.emit('thank-you', payload);
});