const Film = require('../models/film');
const Inventory = require('../models/inventory');
const Category = require('../models/category');
const Actor = require('../models/actor');
const FilmActor = require('../models/film_actor');
const FilmCategory = require('../models/film_category');
const Language = require('../models/language');

Film.belongsToMany(Category, { through: FilmCategory, foreignKey: 'film_id'});
Category.belongsToMany(Film, { through: FilmCategory, foreignKey: 'category_id'});
Film.belongsTo(FilmCategory, {targetKey:'film_id', foreignKey:'film_id'});


Film.belongsToMany(Actor, { through: FilmActor, foreignKey: 'film_id'});
Actor.belongsToMany(Film, { through: FilmActor, foreignKey: 'actor_id'});
Film.belongsTo(FilmActor, {foreignKey:'film_id', targetKey:'film_id'});


Film.belongsTo(Inventory, {target_key:'film_id', foreignKey:'film_id'});
Film.belongsTo(Language, {targetKey:'language_id', foreignKey:'language_id'});

async function getFilmDetailsbyInventoryId(inventory_id){
        return Film.findAll({
            include: [{
                model: Inventory,
                required: true,
                where:{
                    inventory_id:inventory_id,
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
            },{
                model: Language,
                required: true,
            }],
        });
}

async function getAllCategories(){
    FilmCategory.belongsTo(Film, {targetKey:'film_id', foreignKey:'film_id'});
    return Category.findAll({
        offset:1,limit:10,
        include:{
            model: Film,
            required: true,
        }
    });
}

async function getAllCategoriesById(category_id){
    FilmCategory.belongsTo(Film, {targetKey:'film_id', foreignKey:'film_id'});
    return Category.findByPk(category_id, {
        include:{
            model: Film,
            required: true,
        }
    });
}

module.exports = { getFilmDetailsbyInventoryId, getAllCategories, getAllCategoriesById};