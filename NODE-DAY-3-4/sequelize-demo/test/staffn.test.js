const Staffn = require("../models/staffn");
const Storen = require("../models/storen");

// const db = require("../models/index");
// db.sequelize.sync();

// Staffn.bulkCreate([
//     {first_name:'Bhuvan',last_name:'prasad',email:'bhuvan.prasad@gmail.com',store_id:1,username:'bhuvan100',password:'bhuvan0999'},
//     {first_name:'Teja',last_name:'reddy',email:'teja.simha@gmail.com',store_id:2,username:'tejareddy3',password:'tejasimha123'},
// ]).then(() => console.log('New Staff are been updated..!'));

test("find all staff", async () => {
    const staff = await Staffn.findAll({
        include: [
            {
              model: Storen,
              required: true,
            },
        ],
    });
    console.log(JSON.stringify(staff, null, 2));
    expect(staff.length >= 0);
});
