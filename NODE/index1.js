let airports = require("./airports.json");

//console.log(airports);

let airportsRussia = airports.filter(function(e){
    if(e.country === "Russia")
        return 1;
});

let airportsEurope = airports.filter(function(e){
    if(e.tz.startsWith("Europe"))
        return 1;
});

let cityDirectFlights = airports.reduce((x,y) => {
    x[y.city] = x[y.city] || 0;
    x[y.city]+= parseInt(y.direct_flights);
    return x;
}, {});

let sortedAirports = airports.sort(function(e,f){
    return e.city > f.city ? 1:-1;
});

console.log(cityDirectFlights);
console.log(airportsEurope);
console.log(airportsRussia);
console.log(sortedAirports);