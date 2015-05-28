var DMU = new (require("../lib/DataMockUtil"));

function GermanNameModel() {
	
	this.maleNames = [
		'Andreas','Bernd','Dieter','Dominik','Emmerich','Erik','Ernst','Franz','Hans',
		'Jan','Jens','Johans','Jonas','Jorg','Jurgen','Klaus','Kraus','Lorenz','Ludwig','Lukas',
		'Markus','Niklas','Richart','Thorsten','Ulrich','Uwe','Wolfgang'
	];
	
	this.femaleNames = [
		'Angelika','Anke','Antje','Birgit','Erika','Franziska','Heike','Ines',
		'Karin','Karolin','Katja','Kerstin','Marie','Melanie','Monika','Nadine','Nicole',
		'Sabine','Silke','Simone','Stefanie','Susanne','Tanja','Ulrike','Ursula','Valerie','Veronika'
	];
	
	this.surnamePrefixes = [
		'Braun','Deutsch','Eisen','Engel','Fisch','Fleisch',
		'Gold','Gott','Gross','Grun','Hammer','Hahn','Hohen',
		'Klein','Lang','Leben','Midden','Morgen','Nacht',
		'Roth','Sauer','Schwarz','Schwein','Silber',
		'Tannen','Thor','Vogel','Wasser','Wolf','Weiss','Zimmer',
		'Ein','Zwei','Drei','Vier','Fünf','Sechs','Sieben','Acht','Neun','Zehn','Elf','Zwölf',
		'Erste','Zweite','Dritte','Vierte','Fünfte','Sechste','Siebte','Achte','Neunte','Zehnte','Elfte','Zwölfte'
	];
	
	this.surnameSuffixes = [
		'','bauer','baum','beck','berg','berger','dorff','feld',
		'haus','hardt','heim','holz','hower','huber','jager',
		'kaiser','kramer','kruger','konig','lager','mann','merkel','peter','richter',
		'schmidt','schafer','schreiber','schneider','steiger','stein','tag','thaler',
		'wald','walder','walter','wasser','weber','weiser','winkel','wurst','ziegler'
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
	name.surname = DMU.pickElements(rand,0,1,this.surnamePrefixes,this.surnameSuffixes);	
}

module.exports = GermanNameModel;