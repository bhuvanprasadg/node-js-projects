const Rental = require('../models/rental');
const date = require('date-and-time');

async function createRental({
    staff_id,
    inventory_id,
    customer_id,
  }) {
    return Rental.create({
      staff_id,
      inventory_id,
      customer_id,
      rental_date: new Date(),
      return_date: date.addDays(new Date(),15),
      last_update: new Date(),
    });
  }
  
  module.exports = { createRental };