const Category = require('../models/category');
const FilmCategory = require('../models/film_category');

FilmCategory.belongsTo(Category, {targetKey:'category_id', foreignKey:'category_id'});

test("find all categories", async () => {
    try{
        const categories = await FilmCategory.findAll({
            offset:10, limit:10,
            include: [{
                model: Category,
                required: true,
            },],
        });  
        // console.log(JSON.stringify(categories, null, 2));
        expect(categories.length > 0);
    }
    catch(error){
        console.log(error)
    }
});