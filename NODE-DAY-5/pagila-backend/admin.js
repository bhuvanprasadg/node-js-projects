const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const storeDao = require('./dao/store');
const staffDao = require('./dao/staff');
const customerDao = require('./dao/customer');

router.get('/store', async (req, res) => {
    try{
        const stores = await storeDao.getAllStores();
        res.json(stores);
    } catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.get('/staff', async (req, res) => {
    try{
        const staff = await staffDao.getAllStaff();
        res.json(staff);
    } catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.post('/customer', jsonParser, async(req, res) => {
    try{
        const newCustomer = await customerDao.createCustomer(req.body);
        res.json({
            message: `Created a new Customer`,
            data: await customerDao.getAllCustomers(),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

module.exports = router;