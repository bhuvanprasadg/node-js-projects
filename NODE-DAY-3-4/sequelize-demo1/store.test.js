const Store = require("../models/store");
const Staff = require("../models/staff");

test("find all stores", async () => {
  const store = await Store.findAll({
    include: [
      {
        model: Staff,
        required: true,
      },
    ],
  });
  console.log(JSON.stringify(store, null, 2));
  expect(store.length > 0);
});

test("relation between staff and store", async () => {});