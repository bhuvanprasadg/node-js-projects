const storeDao = require("../dao/store");

describe("basic tests for store DAO", () => {
    test("create store", async () => {
        const newStore = await storeDao
          .createStore({
            address_id: 5,
          })
          .catch((err) => console.log(err));

        const newStore2 = await storeDao
          .createStore({
            address_id: 6,
          })
          .catch((err) => console.log(err));

        expect(newStore).not.toBeNull();
        expect(newStore2).not.toBeNull();
    });
});
