'use strict';

const events = require('../event-pool.js');
const faker = require('faker');
const { manageDelivery } = require('../driver/driver.js');

let product;
// delivery variable <- store, orderID, customer, address
setInterval(() => {
        product = {
        store: 'Jeremys Map Shop',
        orderID: faker.datatype.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.city()}, ${faker.address.state()}`
    }
    console.log('i made it!!!');
    events.emit('pickup', product);
}, 3000);
    
function handleVendorDelivery(payload) {
    setInterval(() => {
   events.emit('delivered', payload);
       console.log(`Thank you for delivering ${payload.orderID}`);
   }, 3500);
}

   events.on('delivered', handleVendorDelivery);
   






