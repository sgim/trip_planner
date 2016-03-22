var router = require("express").Router();
var models = require("../models");
var Promise = require("bluebird");
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

router.get("/", (req, res, next) => {
	Promise.all([Hotel.find(), Restaurant.find(), Activity.find()])
	.spread((hotels, restaurants, activities) => {
		res.render("index", {
			hotels: hotels,
			restaurants: restaurants,
			activities: activities
		});
	})
	.catch(next);
});





module.exports = router;
