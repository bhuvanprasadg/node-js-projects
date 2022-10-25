const API_ENDPOINT = "http://datamall2.mytransport.sg/ltaodataservice";
const PAGE_SIZE = 500; // How many records the API returns in a page.
const LTA_API_KEY = process.env.LTA_API_KEY;

router.get("/ltaodataservice/:transportation", (req, res) => {
	let params=req.params;
	let transportation=params["transportation"];

	var arr_result=[];
	var offset = 0;

	function callAPIService(transportation, offset) {
		request({
		    url: `${API_ENDPOINT}/${transportation}?$skip=${offset}`,
		    method: "GET",
		    json: true,
		    headers: {
		    	"AccountKey" : LTA_API_KEY,
			    "accept" : "application/json"
		  	}
		}, (err, response, body) => {
			let result = {};
		   if (err || response.statusCode !== 200) {
		    	return res.status(500).json({ 
		        	type: "error",
		        	message: (err !== null && typeof err.message !== "undefined") ? err.message : "Error. Unable to retrieve data from datamall.lta.gov.sg Bus Routing API."
	      		});
		    } else {
		    	result=body.value;
		    	arr_result = arr_result.concat(result);
		    	offset += PAGE_SIZE;
		    	if(result.length<PAGE_SIZE) {
		    		return res.status(200).json(arr_result);
		    	} else {
		    		callAPIService(transportation, offset);
		    	}
		    }
		});
  } // end recursive method
  callAPIService(transportation, offset);
  
});
//beers = paginated_fetch("https://newsapi.org/v2/top-headlines?country=IN&category=business&from=2022-03-22&sortBy=publishedAt&apiKey=7031b4857e444bdbb23dd2663451bfc9");
//console.log(beers);