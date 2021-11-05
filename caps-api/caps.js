'use strict';

const io = require('socket.io-client');
const express = require('express');
const cors = require('cors');

const socket = io.connect('http://localhost:3000/caps');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3001;

let delivery = {
    store: 'Jeremys Paperclips',
    orderID: 7,
    customer: 'Jimbo',
    address: '123 Smith St'
}

app.post('/pickup', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('pickup', req.body);
    socket.emit('join', req.body.store);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

app.post('/in-transit', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('in-transit', req.body);
    socket.emit('join', req.body.store);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

app.post('/delivered', (req, res) => {
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('delivered', req.body);
    socket.emit('join', req.body.store);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});


app.listen(PORT, () => console.log(`server is up on port ${PORT}`));


