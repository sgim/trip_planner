var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
});




module.exports = mongoose.model("Place", placeSchema);
