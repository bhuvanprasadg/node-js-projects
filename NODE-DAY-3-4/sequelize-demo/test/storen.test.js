const Storen = require("../models/storen");
const Staffn = require("../models/staffn");

// const db = require("../models/index");
// db.sequelize.sync();

// Storen.bulkCreate([
//     {manager_staff_id:1,address_id:2},
//     {manager_staff_id:2,address_id:1},
// ]).then(() => console.log('New Staff are been updated..!'));

test("find all staff", async () => {
    const storen = await Storen.findAll({
        include: [
            {
              model: Staffn,
              required: true,
            },
        ],
    });
    console.log(JSON.stringify(storen, null, 2));
    expect(storen.length > 0);
});

test("relation between staff and store", async () => {});