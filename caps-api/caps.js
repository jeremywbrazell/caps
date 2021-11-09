'use strict';

const io = require('socket.io-client');
const express = require('express');
const cors = require('cors');
const faker = require('faker');

const socket = io.connect('http://localhost:3000/caps');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3001;

let delivery = {
    clientID: '12345',
    eventName: 'event',
    messageID: '987',
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
}

app.post('/pickup', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('pickup', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

app.post('/in-transit', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('in-transit', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

app.post('/delivered', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('delivered', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
    
});

app.post('/received', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('received', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

app.post('/get-all', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('get-all', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});


app.listen(PORT, () => console.log(`server is up on port ${PORT}`));


