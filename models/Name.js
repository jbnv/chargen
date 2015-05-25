// Model for one particular name.
// language: A string identifying the language to use (default: English)
// quantity: Number of names that will be made (default: 1)
// ordinal: Number indicating the rank or position of this particular name.
function Name(language,quantity,ordinal) {
	
	console.log("Create new name "+ordinal+"/"+quantity+".");

	this.language = language || "English";
	this.quantity = quantity || 1;
	this.ordinal = ordinal || 0; 
	
	this.random = (ordinal + Math.random())/quantity; // a number [0,1) to randomize the name
	this.gender = "";
	this.genderMix = 0.5; // a number [0,1) indicating proportion of females | "m" | "f"
	this.genderSelector = Math.random(); //a number [0,1) selecting the gender of this particular name
	
	this.firstName = "";
	this.middleName = "";
	this.surname = "";
	this.formattedName = ""; 
	this.messages = [];
	
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
	model = new (require('./'+language+'NameModel'));
	model.makeFirstName(this);
	model.makeMiddleName(this);
	model.makeSurname(this);
	model.makeFormattedName.call(this);
}

module.exports = Name;