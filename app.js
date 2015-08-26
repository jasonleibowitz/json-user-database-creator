var express = require('express');
var faker = require('faker');
var fs = require('fs');
var helpers = require('./helpers');
var _ = require('lodash');
var pathToRegexp = require('path-to-regexp');
var app = express();

var keys = [];
var re = pathToRegexp('/:number(\\d+)', keys);


app.get('/', function(req, res) {
	res.send('hello world');
});

app.get(re, function(req, res) {

	console.log(req.params['0']);

	helpers.removeOldFiles(function(){
		fs.writeFile('directory.json', JSON.stringify(helpers.generateLazardEmployee(req.params['0'])), function(err, data) {
			if (err) throw err;
			console.log('created new directory of ' + req.params['0'] + ' new Lazard employees.');
			res.send('Successfully created file');
		});
	});

});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Lazone Database Creator listening on port %s', port);
})
