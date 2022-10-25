const Address = require("../models/address");
const Staff = require("../models/staff");

async function createStaff({
  staff_id,
  address_id,
  first_name,
  last_name,
  email,
  active,
  username,
  password,
  store_id,
}) {
  return Staff.create({
    staff_id,
    address_id,
    first_name,
    last_name,
    email,
    active,
    username,
    password,
    store_id,
    last_update: new Date(),
  });
}

async function getAllStaff(){
  return Staff.findAll({
    include:{
      model: Address,
    }
  });
}

module.exports = { createStaff , getAllStaff};
