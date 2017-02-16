exports = module.exports = function(app, mongoose) {

	var movieSchema = new mongoose.Schema({
		id:       		{ type: Number },
		title: 			{ type: String },
		description: 	{ type: String },
		rating: 		{ type: Number },
		released: 	 	{ type: Date   },
	});

	mongoose.model('Movie', movieSchema);

};
