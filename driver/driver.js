'use strict';

// connecting to socket.io as a client
const io = require('socket.io-client');
//connect to the HUB!!!
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', message => {
        console.log('pickup', payload.orderID);
        socket.emit('pickup-completed', message)
});

socket.on('in-transit', message => {
    console.log('in-transit', payload.orderID);
    socket.emit('in-transit-completed', message)
});

socket.on('delivered', message => {
    console.log('delivered', payload.orderID);
    socket.emit('delivery-completed', message);
});