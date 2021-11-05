"use strict";

//require (socket)(port)
const io = require("socket.io")(3000);
// on connection -> console log that connecion
io.on("connection", (socket) => {
  console.log("CORE", socket);
});

const caps = io.of("/caps");
// on connection to caps
// console log the connection
caps.on("connection", (socket) => {
  console.log("Caps connected", socket.id);

  // join the room
  socket.on("join", (room) => {
    console.log(`created as room ${room}`);
    socket.join(room);
  });

  // pickup event
  socket.on("pickup", (payload) => {
    logger("pickup", payload);
    caps.emit("pickup", payload);
  });

  // in transit event
  socket.on("in-transit", (payload) => {
    logger("in-transit", payload);
    caps.emit("in-transit", payload);
  });

  // delivered event
  socket.on("delivered", (payload) => {
    logger("delivered", payload);
    caps.emit("delivered", payload);
  });

   // delivered event
   socket.on("thank-you", (payload) => {
    logger("thank-you", payload);
    caps.emit("thank-you", payload);
  });

});



function logger(event, payload) {
  let time = new Date();
  console.log({ time, event, payload });
}
