const Film = require('../models/film');
const Inventory = require('../models/inventory');

Film.belongsTo(Inventory, {targetKey:'film_id', foreignKey:'film_id'});

test("find all films", async () => {
    try{
        const films = await Film.findAll({
            offset:10, limit:10,
            include: [{
                model: Inventory,
                required: true,
                where:{
                    store_id:2,
                }
            },],
        });  
        // console.log(JSON.stringify(films, null, 2));
        expect(films.length > 0);
    }
    catch(error){
        console.log(error)
    }
});