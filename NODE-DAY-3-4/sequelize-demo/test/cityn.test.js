const City = require('../models/cityn');
const Country = require('../models/countryn');

test("find all cities", async () => {
    const city = await City.findAll({
      offset: 0,
      limit: 10,
      include: [
        {
          model: Country,
          required: true,
        },
      ],
    });
    expect(city.length == 10);
    console.log("All cities:", JSON.stringify(city, null, 2));
});