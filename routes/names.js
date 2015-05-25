/* jshint node:true */

nameTemplate = require("../models/Name");

module.exports = function(app) {

	app.use('/names/:language/:quantity',function(request,response,next) { 
	
		// Input.
		language = request.params.language || "English";
		quantity = request.params.quantity || "1";
		console.log("[/names]",language,quantity,request.path);
		
		// Generation.
		var outbound = [];
		for (ordinal = 0; ordinal < quantity; ordinal++) {
			name = new nameTemplate(language,quantity,ordinal);
			outbound.push(name);
		}
		
		// Output.
		response.json({
			'query': { 'language': language, 'quantity': quantity },
			'names': outbound
		});

	});

}
