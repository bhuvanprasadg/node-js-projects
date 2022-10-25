const Country = require('../models/country');
const City = require('../models/city');

test("find all countries", async () => {
    const country = await Country.findAll({
      offset: 0,
      limit: 10,
      include: [
        {
          model: City,
          required: true,
        },
      ],
    });
    expect(country.length == 10);
    // console.log("All countries:", JSON.stringify(country, null, 2));
});

// test("find one country", async () => {
//     const country = await Country.findByPk(2, {
//       include: [
//         {
//           model: City,
//           required: true,
//         },
//       ],
//     });
//     expect(country != null);
//     console.log(JSON.stringify(country, null, 2));
// });

// test("find one country", async () => {
//   const country = await Country.findOne({ where: {country:'USA'}});
//   console.log(JSON.stringify(country, null, 2));
// });