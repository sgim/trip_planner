var express = require("express");
var app = express();
var swig = require("swig");
var morgan = require("morgan");
var bodyParser = require("body-parser");

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", swig.renderFile);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));

app.use(require("./routes"));

//error triggering middleware
app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
});

//error handling middleware
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log({error: err});
	res.end();
});

var port = 3000;
app.listen(port, function () {
	console.log("listening on port:", port);
});