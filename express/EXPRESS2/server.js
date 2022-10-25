const express = require('express');
const app = express();
const port = 3000;
const airports = require('./airports.json');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/airports', (req, res) => {
    res.json({
        data: airports,
    });
});

app.get('/airports/:code', (req,res) => {
    const airport = airports.find((airport) =>airport.code === req.params.code);
    res.json({
        data: airport,
    });
});

app.get('/airports/country/:country', (req,res) => {
    const airport = airports.filter((airport) =>airport.country === req.params.country);
    res.json({
        data: airport,
    });
});

app.post('/', jsonParser,function(req, res){
    if(!req.body){
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       airports.push({
        code: "ABT",
        lat: "47.7406",
        lon: "88.0845",
        name: "Azlay Airport",
        city: "Azlay",
        state: "Muscow",
        country: "Berlin",
        woeid: "12511977",
        tz: "Europe/Germany",
        phone: "",
        type: "Airports",
        email: "",
        url: "",
        runway_length: null,
        elev: null,
        icao: "ZWAT",
        direct_flights: "1",
        carriers: "1",
       });
       res.json({message: "New airport created."});
    }
 });

app.put('/airports', jsonParser, (req,res) =>{
    airportIndex = airports.findIndex((airport) => airport.code === req.body.code);

    if(airportIndex==-1){
        res.json({error: 'Not Found'});
    }
    else{
        airports[airportIndex] = req.body;
        res.json(airports[airportIndex]);
    }
});

app.listen(port, () => {
    console.log('Server is Started');
});