const Film = require('../models/film');
const Inventory = require('../models/inventory');
const Category = require('../models/category');
const Actor = require('../models/actor');
const FilmActor = require('../models/film_actor');
const FilmCategory = require('../models/film_category');

Film.belongsToMany(Category, { through: FilmCategory, foreignKey: 'film_id'});
Category.belongsToMany(Film, { through: FilmCategory, foreignKey: 'category_id'});
Film.belongsTo(FilmCategory, {targetKey:'film_id', foreignKey:'film_id'});


Film.belongsToMany(Actor, { through: FilmActor, foreignKey: 'film_id'});
Actor.belongsToMany(Film, { through: FilmActor, foreignKey: 'actor_id'});
Film.belongsTo(FilmActor, {foreignKey:'film_id', targetKey:'film_id'});


Film.belongsTo(Inventory, {target_key:'film_id', foreignKey:'film_id'});

test("find films by inventory id", async () => {
    try{
        const films = await Film.findAll({
            include: [{
                model: Inventory,
                required: true,
                where:{
                    inventory_id:6,
                },
            },{
                model:FilmActor,
                required: true,
                include: [{
                    model: Actor,
                }]
            },
            {
                model:FilmCategory,
                required: true,
                include: [{
                    model: Category,
                }]
            },],
        });  
        // console.log(JSON.stringify(films, null, 2));
        expect(films.length > 0);
    }
    catch(error){
        console.log(error)
    }
});