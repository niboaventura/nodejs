//File: controllers/movies.js
var mongoose = require('mongoose');
var Movie  = mongoose.model('Movie');

//GET - Return all movies in the DB
exports.findAllMovies = function(req, res) {
	Movie.find(function(err, movies) {
    if(err) res.send(500, err.message);

    console.log('GET /movies')
		res.status(200).jsonp(movies);
	});
};

//GET - Return a movie with specified ID
exports.findById = function(req, res) {
	Movie.findById(req.params.id, function(err, movie) {
    if(err) return res.send(500, err.message);

    console.log('GET /movie/' + req.params.id);
		res.status(200).jsonp(movie);
	});
};

//POST - Insert a new movie in the DB
exports.addMovie = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var movie = new Movie({
		id:       	  req.body.id,
		title: 		  req.body.title,
		description:  req.body.description,
		rating: 	  req.body.rating,
		released:  	  req.body.released
	});

	movie.save(function(err, movie) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(movie);
	});
};

//PUT - Update a register that already exists
exports.updateMovie = function(req, res) {
	Movie.findById(req.params.id, function(err, movie) {
		id:       	  req.body.id,
		title: 		  req.body.title,
		description:  req.body.description,
		rating: 	  req.body.rating,
		released:  	  req.body.released

		movie.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(movie);
		});
	});
};

//DELETE - Delete a Movie with specified ID
exports.deleteMovie = function(req, res) {
	Movie.findById(req.params.id, function(err, movie) {
		movie.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
