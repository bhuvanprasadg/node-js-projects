const Store = require("../models/store");

async function createStore({ address_id }) {
  return Store.create({
    address_id: address_id,
    last_update: new Date(),
  });
}

async function getAllStores(){
  return Store.findAll();
}

module.exports = { createStore };
