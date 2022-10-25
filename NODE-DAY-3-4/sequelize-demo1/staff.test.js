const Staff = require("../models/staff");
const Store = require("../models/store");

test("find all staff", async () => {
  const staff = await Staff.findAll({
    include: [
      {
        model: Store,
        required: true,
      },
    ],
  });

  console.log(JSON.stringify(staff, null, 2));
  expect(staff.length > 0);
});
