const Customer = require("../models/customer");

async function createCustomer({
  store_id,
  address_id,
  first_name,
  last_name,
  email,
  activebool,
  username,
  password,
}) {
  return Customer.create({
    store_id,
    address_id,
    first_name,
    last_name,
    email,
    activebool,
    username,
    password,
    create_date: new Date(),
    last_update: new Date(),
  });
}

async function getAllCustomers(offset,limit){
  return Customer.findAll({
    offset:offset,
    limit:limit,
  });
}

module.exports = { createCustomer, getAllCustomers};
