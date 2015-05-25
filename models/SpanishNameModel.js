var DMU = new (require("../lib/DataMockUtil"));

function SpanishNameModel() {

	this.namePrefixes = [
		'Alejandr','Alessandr','Alons','Alvar','Albert','Angel','Antigu','Benit','Blanc',
		'Calv','Can','Carl','Castill','Castr','Conchit','Crist','Cristin',
		'Delgad','Di','Domingu','Donn','Dor','Fernand',
		'Gerald','Gerard','Garci','Garrid','Gill','Glori','Gom','Gonzal','Gutierr','Hernand','Horati','Iglesi','Ignaci',
		'Jimen','Juli','Lun','Lop','Mari','Marin','Martin','Medin','Molin','Moral','Moren','Mate','Muñ',
		'Nan','Navarr','Nuñ','Orteg','Pabl','Peñ','Per','Priet','Pedr',
		'Ramir','Rodrigu','Romer','Rubi','Robert',
		'Sanch','Sandr','Santiagu','Serran','Suar','Tañ','Torr','Vasqu','Velasqu'
	];
	
	this.maleNames = [
		'David','Gabriel','Javiar','Jesus','Jose','Juan','Miguel','Rafael','Raul','Salvador','Vicente'
	];
	
	this.femaleNames = [
		'Beatriz','Gabriela','Guadelupe','Lisa','Raquel'
	];

	this.surnames = [
		'Cruz','Gil','Monterrey','Ortiz','Ramos','Ruiz','Sanz','Santos'
	];

	for (i in this.namePrefixes) {
		this.maleNames.push(this.namePrefixes[i]+'o');
		this.femaleNames.push(this.namePrefixes[i]+'a');
		this.surnames.push(this.namePrefixes[i]+'o');
		this.surnames.push(this.namePrefixes[i]+'a');
		this.surnames.push(this.namePrefixes[i]+'ez');
	}

}

SpanishNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.firstName+' '+this.surname;
}

SpanishNameModel.prototype.makeFirstName = function(rand) {
	name.firstName = (this.gender == 'm') ? DMU.randomElement(this.maleNames) : this.firstName = DMU.randomElement(this.femaleNames);
}

SpanishNameModel.prototype.makeMiddleName = function(rand) {
	name.middleName = "";
}

SpanishNameModel.prototype.makeSurname = function(rand) {
	name.surname = DMU.randomElement(this.surnames);
}

module.exports = SpanishNameModel;