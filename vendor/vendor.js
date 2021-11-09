'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

let store1 = 'acme-widgets';
let store2 = '1-800-flowers';

socket.emit('join1', store1);
socket.emit('join2', store2);

socket.on('in-transit', (payload) => {
    console.log(`Order in-transit, ${payload.customer}`);
});

socket.on('thank-you', (payload) => {
    console.log(`Thanks for delivering, ${payload.store}`);
});