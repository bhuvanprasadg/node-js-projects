fetch("./data/airports.json")
  .then((response) => response.json())
  .then((data) => process(data))
  .catch((error) => console.log(error));

function process(data) {

  //filter the airport by country Russia and print the length
  let air = data.filter(function(e){
    if(e.country === "Russia")
      return 1;
  }).length;
  console.log(air);

  //filter the arrays starting with "Europe"
  var startsEur = data.filter(item => item.tz.startsWith('Europe')).length;
  console.log(startsEur);

  //details & location
  let detailsLocation = data.map(({code,type,direct_flights,carriers,lat,lon,name,city,state,country,tz}) => 
  {
    return {
      "details":{code:code,type:type,direct_flights:direct_flights,carriers:carriers
      },
      "location":{lat:lat,lon:lon,name:name,city:city,state:state,country:country,tz:tz
      }
    }
  });
  console.log(detailsLocation);


  //city & direct flights
  let cityFlights = data.reduce((x,y) => {
    x[y.city] = x[y.city] || 0;
    x[y.city]+= parseInt(y.direct_flights);
    return x;
  }, {});
  console.log(cityFlights);

  /*
  const finalData = data.reduce((preValue, currValue) => {

    if(!preValue.hasOwnProperty(currValue.city)){
      preValue[currValue.city] = parseInt(currValue.direct_flights);
    }
    else{
      preValue[currValue.city] += parseInt(currValue.direct_flights);
    }
    return preValue;
  },{});

  console.log(JSON.stringify(finalData,null,4));
  */
}
