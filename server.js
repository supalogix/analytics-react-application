var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));

var internalState = {};

app.post("/api/v1/chart/state", function(req,res,error) {
	var request = req.body;
	internalState = request;
	res.send("");
});

app.get("/api/v1/chart/day", function(req,res,error) {
	var response = {
		data: internalState.day
	};

	res.send( response );
});

app.get("/api/v1/chart/month", function(req,res,error) {
	var response = {
		data: internalState.month
	};

	res.send( response );
});

app.get("/api/v1/chart/year", function(req,res,error) {
	var response = {
		data: internalState.year
	};

	res.send( response );
});

app.listen(8000, function() {
	console.log("React app listening on port 8000");
});
