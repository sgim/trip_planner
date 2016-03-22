var mongoose = require("mongoose");
var placeSchema = require("./place").schema;
var Schema = mongoose.Schema;

var activitySchema = new Schema({
	name: String,
	place: placeSchema,
	age_range: String
});




module.exports = mongoose.model("Activity", activitySchema);
