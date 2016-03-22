var mongoose = require("mongoose");
var placeSchema = require("./place").schema;
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	name: String,
	place: placeSchema,
	cuisine: String,
	price: {
		type: Number,
		min: 1,
		max: 5
	}
});




module.exports = mongoose.model("Restaurant", restaurantSchema);

