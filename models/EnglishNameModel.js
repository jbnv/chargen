var DMU = new (require("../lib/DataMockUtil"));

function EnglishNameModel() {

	this.maleNames = [
		'Abel','Adel','Adam','Am','Amand','Armand','Art','Arthur','Anthony','Aston','Athen','Austin','August', 
		'Barney','Barnaby','Bernard','Bill','Blake','Bob','Brix','Buster','Bruce','Cam','Cameron','Cather',
		'Charles','Carl','Cary','Calvin','Chester','Clement','Cole','Collin','Conn','Connell',
		'Cryst','Cullen','Daniel','David','Donald','Donnell','Dwight', 
		'Ed','Em','Emmet','Emil','Eric','Frank','Fred','Gabriel','Gary','George',
		'Harold','Harral','Hort','Hugh','Horace','Ignace', 
		'James','Jacob','Jake','Jack','Jeff','Jeffer','Jonas','Jon','Joseph','John','Jonathan', 
		'Kather','Keith','Kevin','Kenneth','Lauder','Leo','Leon','Leonard','Louis','Lyle',
		'Marion','Martin','Matthew','Malcolm','Malley','Margar','Max','Michael',
		'Paul','Peter','Philip','Rax','Rex','Rix','Rollin','Roy','Ronald', 
		'Sam','Samuel','Sander','Shane','Simon','Spencer','Steve','Steven','Stephen','Sullivan','Thomas','Theo','Timothy', 
		'Warren','Wayne','Wend','William','Zachary','Zed','Zimmer' 
	];
	
	this.femaleNames = [
		'Abigail','Alice','Allison',
		'Anne','Barbara','Belinda','Bernadette','Berenice','Bess','Beth','Bethany','Betty',
		'Beverley','Bonnie','Brenda','Carol',
		'Cate','Cathy','Charlene','Cher','Cheryl','Charlot','Charlotte',
		'Chloe','Cleo','Courtney','Danielle','Diana','Donna',
		'Elizabeth','Eunice','Gabriel','Jane','Jennifer',
		'Jean','Joan','Joanne','Julie','Kay','Kat','Kate','Katrina','Kim','Linda','Liz','Liza','Martha','Mary',
		'Melissa','Patty','Patricia','Patrice','Sandra','Sarah','Susan','Ursula',
		'Venus','Veronica','Victoria','Winifred','Zoe'
	];
	
	this.feminineSuffixes = [
		'a','al','e','el','elle','ene','ence','ense','ensce','et','ette','ille','ilyn','iline','ine','ita','y','yn'
	];

	// Prefixes that do not end in a vowel.
	this.namePrefixes1 = [
		'Car','Donn','Ed','Em','Flor','Foll','Ger','Haw','How','Os',
		'Rey','Scan','Sig','Wal','Wil','Win'
	];
	
	// Prefixes that end in a vowel (and thus pair only with those beginning with consonants).
	this.namePrefixes2 = [
		'Au','Lo','Madi','Ro','Sco','Tru'
	];
	
	this.nameSuffixes1 = [
		'back','bank','beard','beck','bell','ber','berg','bert',
		'bergen','berger','berk','bern','bex','blood','bor','born',
		'boro','borough','bourne','bow','brace','brack','brake','breck',
		'brew','brews','brex','broke','brook','bry','brys','buck',
		'burg','burger','burke','burn','bush','by','caster','chester','cipher','cooper','copper',
		'cock','cox','craft','crans','crest','dale','dare','darn',
		'dell','dock','docks','dor','dorce','dow','dox','drew',
		'drews','dry','drys','farm','feld','felt','fellow','fer','field',
		'flight','fold','folk','foot','ford','fork','fort','fox','fred','freight','frey',
		'frid','fry','frys','gard','gan','geld','ger','ghost','glen','glot','gold','good',
		'gor','gord','gould','grant','grew','ham','hand',
		'hart','head','heart','hill','hope','hound','king','lace','late',
		'land','ley','lin','lind','lock','lon','lord','lot','low','lox','luck','ly','lyn',
		'maker','man','mar','max','min','minster','mon','mond','mont','more',
		'mount','peare','pence','per','pool','port','porter','post',
		'pry','rich','rike','rix','rock','rod','roll','row','ry','s','shell',
		'shire','sir','smith','snake','son','sor','stag','steen','ster',
		'stine','ston','stone','stow','styn','teen','ter','thorn','thorp','ton','town','tree',
		'trow','try','van','vane','ver','vyl','walk','wall','war','ward',
		'warn','water','weaver','well','wich','wick','win','wind',
		'wing','wise','wold','wolf','wood','worker','worth','wright',
		'wych','wyck','wyld','wyn','wynd','wyrd','wyst','wyx','y' 
	];
	
	this.nameSuffixes2 = [
		'ald','ard','ax','ing','old'
	];
	

	this.surnames = [
		'Brady','Bush','Coolidge','Cook',
		'Cooper','Davis','Ford','Grant',
		'Harding','Jones','King','Lincoln','Nixon','Prichard',
		'Reagan','Shreve','Smith','Taft','Truman','Wallace','Weaver','Willis'
	];
	
	this.surnameNamePrefixes = [
		"O'","Mc","Fitz","Bar"
	];
	this.surnamePrefixes = [
		'An','Angel','Apple','Ash','Autumn','Bal','Balti','Bar',
		'Beach','Beaver','Big','Bird','Black','Blay','Blind','Blue','Bix',
		'Bomb','Bor','Brine','Briton','Brook','Brow','Brown','Bull','Bur',
		'Butt','Butter','Cald','Cart','Castle','Clay','Clin','Coal','Copper','Cold',
		'Corn','Crom','Crow','Darn','Deer','Doe','Dor','Duck','Duke','Dutch',
		'Eagle','East','Edin','Elm','Engle','Es','Fair','Farn','Fawn','Fern',
		'Fill','Finch','Fir','Fish','Fox','French','Fur','Gan','Glass','Glen',
		'Glou','Glu','God','Gold','Golden','Good','Goose','Gor','Gos',
		'Grand','Grant','Green','Gross','Hair','Hard','Hart','Hawk','Hot','Iron',
		'King','Lady','Lamb','Lan','Leo','Lin','Linden','Lion','Little',
		'Liver','Living','Long','Lord','Love','Man','Middle',
		'Moon','Mum','Mur','Nickel','Nor','North','Oak','Oil','Old','Owl',
		'Orange','Paper','Peter','Pine','Price','Prince','Queen',
		'Rain','Ram','Raven','Red','River','Roe','Rud','Rums','Rut',
		'Sand','Saxon','School','Shakes','Shef','Sher','Ship',
		'Short','Shutter','Shuttle','Silver','Sim','Snow','South','Spring','Stag','Steven',
		'Summer','Sun','Sus','Tar','Teal','Thom','Wads','Wal',
		'War','Washing','Wax','Weather','Wes','West','White','Wil',
		'Wind','Winter','Wolf','Wor','Wren','Yellow','Young',
		'One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Twelve'
	];
	
	// We probably don't want to pregenerate all of the possible names, 
	// since the number of combinations is in the thousands.

}

EnglishNameModel.prototype.makeFormattedName = function() {
	this.formattedName = this.firstName+' '+this.middleName+' '+this.surname;
}

EnglishNameModel.prototype.makeOneFirstName = function(rand,gender) {
	console.log("makeOneFirstName");
	outbound = "";
	
	if (gender == 'm') {
		if (rand < 0.10) {
			outbound = DMU.pickElements(rand,0.00,0.10,this.maleNames);
		} else if (rand < 0.40) {
			outbound = DMU.pickElements(rand,0.10,0.30,this.namePrefixes1,this.nameSuffixes1);
		} else if (rand < 0.70) {
			outbound = DMU.pickElements(rand,0.40,0.30,this.namePrefixes2,this.nameSuffixes1);
		} else {
			outbound = DMU.pickElements(rand,0.70,0.30,this.namePrefixes1,this.nameSuffixes2);
		}
	} else if (gender == 'f') {
		if (rand < 0.10) {
			outbound = DMU.pickElements(rand,0.00,0.10,this.femaleNames);
		} else if (rand < 0.19) {
			outbound = DMU.pickElements(rand,0.10,0.09,this.maleNames,this.feminineSuffixes);
		} else if (rand < 0.46) {
			outbound = DMU.pickElements(rand,0.19,0.27,this.namePrefixes1,this.nameSuffixes1,this.feminineSuffixes);
		} else if (rand < 0.73) {
			outbound = DMU.pickElements(rand,0.46,0.27,this.namePrefixes2,this.nameSuffixes1,this.feminineSuffixes);
		} else {
			outbound = DMU.pickElements(rand,0.73,0.27,this.namePrefixes1,this.nameSuffixes2,this.feminineSuffixes);
		}
	}
	
	return outbound;
}

// name: Name() object.
EnglishNameModel.prototype.makeFirstName = function(name) {
	console.log("makeFirstName()");
	name.firstName = this.makeOneFirstName(name.random,name.gender);
}

// For middle names, just use the simple name lists.
// name: Name() object.
EnglishNameModel.prototype.makeMiddleName = function(name) {
	console.log("makeMiddleName()");
	name.middleName = "";
	while (name.middleName == "" || name.middleName == name.firstName) {
		name.middleName = this.makeOneFirstName(Math.random(),name.gender);
	}
}

// name: Name() object.
EnglishNameModel.prototype.makeSurname = function(name) {
	rand = parseFloat(name.random) || Math.random();
	if (rand < 0.10) {
		name.surname = DMU.pickElements(rand,0.00,0.10,this.surnames);
	} else if (rand < 0.20) {
		name.surname = DMU.pickElements(rand,0.10,0.10,this.surnameNamePrefixes,this.maleNames);
	} else if (rand < 0.40) {
		name.surname = DMU.pickElements(rand,0.20,0.20,this.maleNames,this.nameSuffixes1);
	} else if (rand < 0.60) {
		name.surname = DMU.pickElements(rand,0.40,0.20,this.maleNames,this.nameSuffixes2);
	} else if (rand < 0.80) {
		name.surname = DMU.pickElements(rand,0.60,0.20,this.surnamePrefixes,this.nameSuffixes1);
	} else {
		name.surname = DMU.pickElements(rand,0.80,0.20,this.surnamePrefixes,this.nameSuffixes2);
	}
}

module.exports = EnglishNameModel;