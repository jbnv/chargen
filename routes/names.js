/* jshint node:true */

// Load models.
modelNames = ['Name','EnglishNameModel','SpanishNameModel','JapaneseNameModel','GermanNameModel'];
models = {};
for (i in modelNames) {
	name = modelNames[i];
	models[name] = require("../models/"+name);
}

module.exports = function(app) {

	app.use('/names/:language/:quantity',function(request,response,next) { 
	
		// Input.
		language = request.params.language || "English";
		quantity = request.params.quantity || "1";
		console.log("[/names]",language,quantity,request.path);
		
		// Generation.
		var outbound = [];
		for (ordinal = 0; ordinal < quantity; ordinal++) {
			
			name = new models.Name();
			name.ordinal = ordinal; // a number that indicates the rank or position of the name in a listStyleType
			name.random = (ordinal + Math.random())/quantity; // a number [0,1) to randomize the name
			//TODO Allow specification of the gender or gender mix.
			
			model = new models[language+'NameModel']();
			name.apply(model);
			outbound.push(name);
		}
		
		// Output.
		response.json({
			'query': { 'language': language, 'quantity': quantity },
			'names': outbound
		});

	});

}
