'use strict';

//require (socket)(port)
const io = require('socket.io')(3000);
// on connection -> console log that connecion
const uuid = require('uuid').v4;

io.on('connection', (socket) => {
  console.log('CORE', socket);
});


const caps = io.of('/caps');
// on connection to caps
// console log the connection
caps.on('connection', (socket) => {
  console.log('Caps connected', socket.id);

  // join the room
  socket.on('join', (room) => {
    console.log(`created as room ${room}`);
    socket.join(room);
  });

queue = {
  retailer: {
    delivered: delivery.orderID
  },
  driver: {
    pickedup: delivery.orderID
  },
  vendor: {
    delivered: delivery.orderID
  }
}

  // pickup event
  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    caps.emit('pickup', payload);
  });

  // in transit event
  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.emit('in-transit', payload);
  });

  // delivered event
  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.emit('delivered', payload);
  });

   // delivered event
   socket.on('thank-you', (payload) => {
    logger('thank-you', payload);
    caps.emit('thank-you', payload);
  });

  socket.on('received', payload => {
    let id = uuid;
    queue.orderID[id] = payload;
    caps.emit('added');
    caps.emit('received', { id, payload });
    caps.disconnect();
  })

   // completed event
   socket.on('completed', payload => {
    delete queue.chores[payload.id]
    caps.emit('completed', message);
  });

   // get ALL event
   socket.on('get-all', () => {
     Object.keys(queue.orderID).forEach(id => {
       caps.emit('order', { id, payload: queue.orderID[id]});
     })
    logger('get-all');

    caps.emit('get-all');
  });

});



function logger(event, payload) {
  let time = new Date();
  console.log({ time, event, payload });
}
