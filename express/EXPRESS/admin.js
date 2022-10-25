const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const storeDao = require('./dao/store');

router.get('/store', jsonParser, async (req, res) => {
    try{
        const stores = await storeDao.getAllStores();
        res.json(stores);
    } catch(err){
        res.json({
            error: err.toString(),
        });
    }
}); 

module.exports = router;