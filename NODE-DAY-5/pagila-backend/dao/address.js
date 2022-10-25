const Address = require("../models/address");

async function createAddress({
  address,
  address2,
  district,
  city_id,
  postal_code,
  phone,
  last_update,
}) {
  return Address.create({
    address,
    address2,
    district,
    city_id,
    postal_code,
    phone,
    last_update,
  });
}

module.exports = { createAddress };
