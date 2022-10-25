const Payment = require('../models/payment');

async function createPayment({
    staff_id,
    rental_id,
    customer_id,
    amount,
    payment_date,
  }) {
    return Payment.create({
      staff_id:staff_id,
      rental_id:rental_id,
      customer_id:customer_id,
      amount:amount,
      payment_date:payment_date,
    });
  }
  
  module.exports = { createPayment };