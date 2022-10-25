const Country = require('../models/countryn');
const City = require('../models/cityn');

Country.create({country:'Germany',last_update:'2016-06-22 19:10:25-07'});

City.bulkCreate([
    {city:'Berlin', country_id:113, last_update:'2016-06-22 19:10:25-07'},
    {city:'Hamberg', country_id:113, last_update:'2016-06-22 19:10:25-07'},
    {city:'Munich', country_id:113, last_update:'2016-06-22 19:10:25-07'},
]).then(() => console.log('Cities Updated'));

test("find all countries", async () => {
    const country = await Country.findByPk(113,{
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
    console.log("All countries:", JSON.stringify(country, null, 2));
});