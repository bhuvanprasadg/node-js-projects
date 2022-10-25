const express = require('express');
const router = express.Router();
const filmDao = require('./dao/film');
const filmDetailsDao = require('./dao/film_details');
const rentalDao = require('./dao/rental');
const paymentDao = require('./dao/payment');
const customerDao = require('./dao/customer');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/film', async(req, res) => {
    try{
        offset = (req.query.pageNum - 1)* req.query.pageSize;
        const films = await filmDao.getAllFilmsbyStoreId(req.query.store, offset, req.query.pageSize);
        res.json({
            data: films,
        });
    }catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.get('/film_details', async(req, res) => {
    try{
        const filmsByInventory = await filmDetailsDao.getFilmDetailsbyInventoryId(req.query.inventoryId);
        res.json({
            data: filmsByInventory,
        });
    }catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.post('/rental', jsonParser, async(req, res) => {
    console.log(req.body);
    try{
        const newRental = await rentalDao.createRental(req.body);
        res.json({
            message: `Created a new Rental`,
            data: newRental,
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.post('/payment', jsonParser, async(req, res) => {
    try{
        const newPayment = await paymentDao.createPayment(req.body);
        res.json({
            message: `Created a new Payment`,
            data: newPayment,
        });
    } catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.get('/customer', async(req, res) => {
    try{
        offset = (req.query.pageNum - 1)* req.query.pageSize;
        const customers = await customerDao.getAllCustomers(offset, req.query.pageSize);
        res.json({
            data:customers,
        });
    }catch(err){
        res.json({
            error: err.toString(),
        });  
    }
});

router.get('/categories', async(req, res) => {
    try{
        const categories  = await filmDetailsDao.getAllCategories();
        res.json({
            categories:categories,
        })
    }catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

router.get('/categories/:id/film', async(req, res) => {
    try{
        const categories  = await filmDetailsDao.getAllCategoriesById(req.params.id);
        res.json({
            categories:categories,
        })
    }catch(err){
        res.json({
            error: err.toString(),
        });
    }
});

module.exports = router;