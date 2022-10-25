const Film = require('../models/film');
const Inventory = require('../models/inventory');

async function getAllFilmsbyStoreId(store_id,offset,limit){
    return Film.findAll({
        offset:offset,
        limit:limit,
        include:{
            model: Inventory,
            where:{
                store_id:store_id,
            }
        }
    });
}

module.exports = { getAllFilmsbyStoreId };
