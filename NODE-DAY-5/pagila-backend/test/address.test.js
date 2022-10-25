const addressDao = require("../dao/address");

describe("basic tests for address DAO", () => {
    test("create address ", async () => {
        const newAddress = await addressDao.createAddress({
          address: "123 Downing street",
          address2: "LBS Nagar",
          district: "Bengaluru",
          city_id: 5,
          postal_code: "500045",
          phone: "873-986-8837",
          last_update: new Date(),
        });

        const newAddress2 = await addressDao.createAddress({
          address: "45-6 LB Nagar",
          address2: "Chilakalguda",
          district: "Hyderabad",
          city_id: 6,
          postal_code: "523445",
          phone: "897-986-1234",
          last_update: new Date(),
        });

        expect(newAddress).not.toBeNull();
        expect(newAddress2).not.toBeNull();
    });
});
