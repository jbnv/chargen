function Name() {
	this.ordinal = 0; // a number that indicates the rank or position of the name in a listStyleType
	this.random = Math.random(); // a number [0,1) to be used to randomize the name
	this.gender = "";
	this.genderMix = 0.5; // a number [0,1) indicating proportion of females | "m" | "f"
	this.genderSelector = Math.random(); //a number [0,1) selecting the gender of this particular name
	this.firstName = "";
	this.middleName = "";
	this.surname = "";
	this.formattedName = ""; 
	this.messages = [];
}

Name.prototype.apply = function(model) {

	// First, set the gender.

	selector = this.genderSelector;
	if ((selector === "m") || (selector === "f")) 
		this.gender = this.genderSelector;
	else {
		if (isNaN(parseFloat(selector))) selector = Math.random();

		mix = this.genderMix;
		if (mix === "m") mix = 0;
		if (mix === "f") mix = 1;
		if (isNaN(parseFloat(mix))) mix = 0.5; // Not a number: disregard for now.
		
		this.gender = selector < mix ? "f" : "m";
	}
	
	// Then make everything.
	model.makeFirstName(this);
	model.makeMiddleName(this);
	model.makeSurname(this);
	model.makeFormattedName.call(this);
}

module.exports = Name;