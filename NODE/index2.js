let restaurants = require('./restaurants.json');

var restaurantNames = restaurants.map(function(r){
    return r.name;
});

var review = restaurants.map(function(e){
    let r = e.reviews.reduce((sum,iter) => {return sum+=iter.rating},0) / e.reviews.length;
    return parseFloat(r.toFixed(2));
});

console.log(review);
console.log(restaurantNames);