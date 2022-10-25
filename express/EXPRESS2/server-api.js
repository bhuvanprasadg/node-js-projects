const express = require('express');
const app = express();
const port = 3000;
const restaurants = require('./restaurant-data.json');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/restaurants', jsonParser, (req, res) => {

    let restaurant =[];

    if(req.query.neighborhood){
        restaurant.push(restaurants.restaurants.filter((restaurant) => restaurant.neighborhood === req.query.neighborhood));
    }

    if(req.query.cuisine_type){
        restaurant.push(restaurants.restaurants.filter((restaurant) => restaurant.cuisine_type === req.query.cuisine_type));
    }

    res.json({
        data: restaurant,
    });

});

app.get('/restaurants/id/:id', (req, res) => {

    let restaurant = restaurants.restaurants.filter((restaurant) => restaurant.id == req.params.id);

    res.json({
        data: restaurant,
    });
});

app.delete('/restaurants/id/:id', (req, res) => {

    restaurants.restaurants.splice(req.params.id-1,1);

    res.json({
        data: restaurants.restaurants,
    });
});

app.post('/restaurants', jsonParser, (req, res) => {
    restaurants.restaurants.push(req.body);
    res.json({
        data: restaurants.restaurants,
    })
});

app.listen(port, () => {
    console.log('Server is Started');
});