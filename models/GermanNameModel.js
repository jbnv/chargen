var DMU = new (require("../lib/DataMockUtil"));

function GermanNameModel() {
	
	this.maleNames = [
		'Andreas','Bernd','Dieter','Dominik','Erik','Ernst','Franz','Hans',
		'Jan','Jens','Jonas','Jorg','Jurgen','Klaus','Lorenz','Ludwig','Lukas',
		'Markus','Niklas','Thorsten','Ulrich','Uwe','Wolfgang'
	];
	
	this.femaleNames = [
		'Angelika','Anke','Antje','Birgit','Erika','Franziska','Heike','Ines',
		'Karin','Karolin','Katja','Kerstin','Marie','Melanie','Monika','Nadine','Nicole',
		'Sabine','Silke','Simone','Stefanie','Susanne','Tanja','Ulrike','Ursula','Veronika'
	];
	
	this.surnamePrefixes = [
		'Braun','Deutsch','Eisen','Engel','Fisch','Fleisch',
		'Gold','Gott','Gross','Grun','Hammer','Hahn',
		'Klein','Lang','Leben','Midden','Morgen','Nacht',
		'Roth','Sauer','Schwarz','Schwein','Silber',
		'Tannen','Vogel','Wolf','Weiss','Zimmer'
	];
	
	this.surnameSuffixes = [
		'','bauer','baum','beck','berg','berger','dorff','feld','haus','hardt','holz','hower','huber','jager',
		'kaiser','kramer','kruger','konig','lager','mann','merkel','peter','richter',
		'schmidt','schafer','schreiber','schneider','steiger','stein','tag','thaler',
		'wald','walder','walter','weber','weiser','winkel','wurst','ziegler'
	];

}

GermanNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.firstName+' '+this.middleName+' '+this.surname;
}

// name: Name() object.
GermanNameModel.prototype.makeFirstName = function(name) {
	name.firstName = (this.gender == 'm') ? DMU.randomElement(this.maleNames) : this.firstName = DMU.randomElement(this.femaleNames);
}

// name: Name() object.
GermanNameModel.prototype.makeMiddleName = function(name) {	
	rand = parseFloat(name.random) || Math.random();
	gender = name.gender;
	list = gender === 'm' ? this.maleNames : this.femaleNames;
	name.middleName = "";
	while (name.middleName == "" || name.middleName == name.firstName) {
		name.middleName = DMU.randomElement(list);
	}
}

// name: Name() object.
GermanNameModel.prototype.makeSurname = function(name) {
	rand = parseFloat(name.random) || Math.random();
	name.surname = DMU.pickElements(rand,this.surnamePrefixes,this.surnameSuffixes);	
}

module.exports = GermanNameModel;