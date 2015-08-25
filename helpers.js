var fs = require('fs');
var _ = require('lodash');
var faker = require('faker');

module.exports = {
	removeOldFiles: function(cb) {
		fs.exists('directory.json', function(exists) {
			console.log('file exists: ', exists);
			if (exists) {
				fs.unlink('directory.json', function(err, data){
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

		_.times(num > 200 ? 200 : num, function(n){
			// faker.local = 'en';
			directory.push({
				id: n,
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				city: faker.address.city(),
				title: faker.name.jobTitle(),
				businessUnit: "Corporate",
				dept: "Global Digital Group",
				ext: faker.random.number({min: 1111, max: 9999})
			});
		});

		// _.times(5, function(n){
		// 	faker.locale = 'fr',
		// 	directory.push({
		// 		id: n,
		// 		firstName: faker.name.firstName(),
		// 		lastName: faker.name.lastName(),
		// 		city: faker.address.city(),
		// 		title: faker.name.jobTitle(),
		// 		businessUnit: "Corporate",
		// 		dept: "Global Digital Group",
		// 		ext: faker.random.number({min: 1111, max: 9999})
		// 	})
		// })

		return directory;
	}
};
