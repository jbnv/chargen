/* jshint node:true */

template = require("../models/Address");

module.exports = function(app) {
	
	app.use('/addresses/:country/:quantity',function(request,response,next) { 
	
		// Input.
		country = request.params.country || "UnitedStates";
		quantity = request.params.quantity || "1";
		console.log("[/addresses]",country,quantity,request.path);

		// Generation.
		var outbound = [];
		for (ordinal = 0; ordinal < quantity; ordinal++) {
			name = new template(country,quantity,ordinal);
			outbound.push(name);
		}

		// Output.
		response.json({
			'query': { 'country': country, 'quantity': quantity },
			'names': outbound
		});

	});

}

// https://www.zipwise.com/webservices/zipinfo.php?key=sd1jef9eh8j0vec1&zip=70506&format=json