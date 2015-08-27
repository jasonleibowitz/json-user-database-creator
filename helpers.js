var fs = require('fs');
var _ = require('lodash');
var faker = require('faker');

function lazardTitleGenerator() {
	var num = Math.random();
	if (num < 0.25) {
		return "Vice President";
	} else if (num < .45) {
		return "Analyst";
	} else if (num < .65) {
		return "Director";
	} else if (num < .8) {
		return "Associate";
	} else if (num < .91) {
		return "Managing Director";
	} else {
		return "Senior Vice President";
	}
}

function lazardBusinessUnitGenerator() {
	var num = Math.random();
	if (num < 0.6) {
		return "Financial Advisory";
	} else if (num < 0.8) {
		return "Corporate";
	} else if (num < 0.95) {
		return "Asset Management";
	} else {
		return "Middle Market Advisory";
	}
}

module.exports = {
	removeOldFiles: function(cb) {
		fs.exists('directory.json', function(exists) {
			console.log('file exists: ', exists);
			if (exists) {
				fs.unlink('directory.json', function(err, data) {
					if (err) throw err;
					console.log('removed directory');
					if (typeof cb == "function") cb();
				});
			} else {
				if (typeof cb == "function") cb();
			}
		});
	},

	generateLazardEmployee: function(num) {
		var directory = [];
		var num = num > 200 ? 200 : num;
		var numNY = num * 0.48;
		var numFrance = num * 0.25;
		var numLondon = num * 0.15;
		var numChicago = num * 0.08;
		var numHouston = num * 0.04;
		var idCounter = 1;

		function idCounterFunc(num) {
			num += 1;
			return num - 1;
		}

		// New York Employee Creator
		_.times(numNY, function(n) {
			faker.locale = 'en';
			directory.push({
				// id: idCounterFunc(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: "New York",
				title: lazardTitleGenerator(),
				businessUnit: lazardBusinessUnitGenerator(),
				dept: faker.commerce.department(),
				ext: faker.random.number({
					min: 1111,
					max: 9999
				}),
				floor: faker.random.number({
					min: 10,
					max: 99
				}),
				phoneNumber: "+1 212 632 6000"
			});
		});

		// France Employee Creator
		_.times(numFrance, function(n) {
			faker.locale = 'fr';
			directory.push({
				// id: idCounterFunc(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: "Paris",
				title: lazardTitleGenerator(),
				businessUnit: lazardBusinessUnitGenerator(),
				dept: faker.commerce.department(),
				ext: faker.random.number({
					min: 1111,
					max: 9999
				}),
				floor: faker.random.number({
					min: 10,
					max: 99
				}),
				phoneNumber: "+44 20 7187 2000"
			});
		});

		// English Employee Creator
		_.times(numLondon, function(n) {
			faker.locale = 'en';
			directory.push({
				// id: idCounterFunc(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: "London",
				title: lazardTitleGenerator(),
				businessUnit: lazardBusinessUnitGenerator(),
				dept: faker.commerce.department(),
				ext: faker.random.number({
					min: 1111,
					max: 9999
				})
			});
		});

		// Chicago Employee Creator
		_.times(numChicago, function(n) {
			faker.locale = 'en';
			directory.push({
				// id: idCounterFunc(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: "Chicago",
				title: lazardTitleGenerator(),
				businessUnit: lazardBusinessUnitGenerator(),
				dept: faker.commerce.department(),
				ext: faker.random.number({
					min: 1111,
					max: 9999
				})
			});
		});

		// Houston Employee Creator
		_.times(numHouston, function(n) {
			faker.locale = 'en';
			directory.push({
				// id: idCounterFunc(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: "Houston",
				title: lazardTitleGenerator(),
				businessUnit: lazardBusinessUnitGenerator(),
				dept: faker.commerce.department(),
				ext: faker.random.number({
					min: 1111,
					max: 9999
				})
			});
		});

		return directory;
	}
};
