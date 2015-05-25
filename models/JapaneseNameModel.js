var DMU = new (require("../lib/DataMockUtil"));

function JapaneseNameModel() {

	this.maleNames = [
		'Daichi','Daiki','Daisuke','Jun','Kaito','Kazuki','Kazuya','Kenta','Kouhei',
		'Naoki','Naoto','Ren','Riku','Ryouta','Ryuu','Shou','Shouhei','Shouta','Souta',
		'Takahiro','Takumi','Takuya','Tatsuya','Tsubasa','Yuu','Yuudai','Yuuta','Yuuto'	
	];
	
	this.femaleNames = [
		'Yui','Rio','Yuna','Hina','Koharu','Hinata','Mei','Mio','Sei','Miyu','Keiko'
	];
	
	this.surnamePrefixes = [
		'Chika','Fuji','Ga','Go','Ha','Ishi','Ka','Ki','Koba','Matsu','Mia','Mura',
		'Na','Naka','Neko','Oha',
		'Sa','Saka','Taka','Wata','Yama'
	];
	
	this.surnameSuffixes = [
		'da','gawa','guchi','hara','hiro','hashi','kami','kawa','ma','mizu','moto','mura','nabe',
		'saki','ta','tou','yashi','zawa','zaki','zuki'
	];
	
	console.log("JapaneseNameModel:",
		this.maleNames.length,"male names;",
		this.femaleNames.length,"female names;",
		this.surnamePrefixes.length*this.surnameSuffixes.length,"surnames."
	);


}

JapaneseNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.surname+' '+this.firstName;
}

// name: Name() object.
JapaneseNameModel.prototype.makeFirstName = function(name) {
	name.firstName = (this.gender == 'm') ? DMU.randomElement(this.maleNames) : this.firstName = DMU.randomElement(this.femaleNames);
}

// name: Name() object.
JapaneseNameModel.prototype.makeMiddleName = function(name) {
	name.middleName = "";
}

// name: Name() object.
JapaneseNameModel.prototype.makeSurname = function(name) {
	rand = parseFloat(name.random) || Math.random();
	name.surname = DMU.pickElements(rand,0,1,this.surnamePrefixes,this.surnameSuffixes);	
}

module.exports = JapaneseNameModel;