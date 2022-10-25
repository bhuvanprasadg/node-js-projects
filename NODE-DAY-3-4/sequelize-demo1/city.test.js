const City = require('../models/city');
const Country = require('../models/country');

test("find all cities", async () => {
    const city = await City.findAll({ offset: 0, limit: 10 });
    expect(city.length == 10);
    console.log("All cities:", JSON.stringify(city, null, 2));
});

// test("find one city", async () => {
//     const city = await City.findOne({ where: {city_id:9}});
//     console.log(JSON.stringify(city, null, 2));
// });

// test("find all cities", async () => {
//     const city = await City.findAll({
//       offset: 0,
//       limit: 10,
//       include: [
//         {
//           model: Country,
//           required: true,
//         },
//       ],
//     });
//     expect(city.length == 10);
//     console.log("All cities:", JSON.stringify(city, null, 2));
// });

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