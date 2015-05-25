var DMU = new (require("../lib/DataMockUtil"));

function SpanishNameModel() {

	this.namePrefixes = [
		'Alejandr','Alessandr','Alons','Alvar','Albert','Angel','Armand','Antigu','Azul',
		'Batist','Benit','Blanqu',
		'Calv','Can','Carl','Castill','Castr','Catal','Conchit','Crist','Cristin',
		'Delgad','Di','Diegu','Domingu','Donn','Dor','Federiqu','Fernand',
		'Gerald','Gerard','Garci','Garrid','Gat','Gill','Glori','Gom','Gonzal','Gutierr',
		'Hernand','Horati','Iglesi','Ignaci',
		'Jimen','Juli','Luci','Lun','Lop',
		'Marqu','Mari','Marin','Martin','Medin','Molin','Moral','Moren','Mate','Muñ',
		'Nan','Navarr','Nin','Noriegu','Nuñ','Orteg','Pabl','Patrici','Peñ','Perr','Priet','Pedr',
		'Ramir','Rodrigu','Roj','Romer','Rubi','Robert',
		'Sanch','Sandr','Santiagu','Serran','Suar','Tañ','Toled','Torr','Vasqu','Velasqu'
	];
	
	this.maleNames = [
		'David','Gabriel','Javiar','Jesus','Jose','Juan','Miguel','Rafael','Ramon','Raul','Salvador','Vicente'
	];
	
	this.femaleNames = [
		'Beatriz','Gabriela','Guadelupe','Inez','Lisa','Raquel','Ramona'
	];

	this.surnames = [
		'Barcelona','Cruz','Gil','Monterrey','Ortiz','Ramon','Ramos','Ruiz','Sanz','Santos'
	];

	for (i in this.namePrefixes) {
		this.maleNames.push(this.namePrefixes[i]+'o');
		this.femaleNames.push(this.namePrefixes[i]+'a');
		this.surnames.push(this.namePrefixes[i]+'o');
		this.surnames.push(this.namePrefixes[i]+'on');
		this.surnames.push(this.namePrefixes[i]+'a');
		this.surnames.push(this.namePrefixes[i]+'ano');
		this.surnames.push(this.namePrefixes[i]+'ez');
	}
	
	console.log("SpanishNameModel:",
		this.maleNames.length,"male names;",
		this.femaleNames.length,"female names;",
		this.surnames.length,"surnames;"
	);

}

SpanishNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.firstName+' '+this.surname;
}

// name: Name() object.
SpanishNameModel.prototype.makeFirstName = function(name) {
	name.firstName = (this.gender == 'm') ? DMU.randomElement(this.maleNames) : this.firstName = DMU.randomElement(this.femaleNames);
}

// name: Name() object.
SpanishNameModel.prototype.makeMiddleName = function(name) {
	name.middleName = "";
}

// name: Name() object.
SpanishNameModel.prototype.makeSurname = function(name) {
	name.surname = DMU.randomElement(this.surnames);
}

module.exports = SpanishNameModel;