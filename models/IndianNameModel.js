var DMU = new (require("../lib/DataMockUtil"));

function IndianNameModel() {
}

IndianNameModel.prototype.syllables = [
	'a','bee','bi','bo','cha','che','chi','chee','chka','chke','chkee','da','de','do','ee',
	'fa','fi','ga','gee','go','ha','hee','ho','i','ja','jee',
	'ka','kee','ki','ksa','ksee','ko','koo','kta','la','le','lo','lu','ma','mee','mi','mo','moo','mus',
	'na','nee','ngee','ngo','no','o','pa','pe','pee','pen','poo','pum','qua','ra','ree','ro',
	'sa','se','sha','sho','ska','skee','so','soo','ta','tee','to','too','tum','va','wa','wam','we','wee','wi','ya'
];

IndianNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.firstName;
}

// name: Name() object.
IndianNameModel.prototype.makeFirstName = function(name) {
	rand = parseFloat(name.random) || Math.random();
	
	if (rand < 0.3) {
		name.firstName = DMU.pickElements(rand,0.0,0.3,this.syllables,this.syllables,this.syllables);	
	} else if (rand < 0.8) {
		name.firstName = DMU.pickElements(rand,0.3,0.5,this.syllables,this.syllables,this.syllables,this.syllables);	
	} else {
		name.firstName = DMU.pickElements(rand,0.8,0.2,this.syllables,this.syllables,this.syllables,this.syllables,this.syllables);	
	}
	name.firstName = DMU.toTitleCase(name.firstName);
}

// name: Name() object.
IndianNameModel.prototype.makeMiddleName = function(name) {
}

// name: Name() object.
IndianNameModel.prototype.makeSurname = function(name) {
}

module.exports = IndianNameModel;