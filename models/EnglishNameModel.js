var DMU = new (require("../lib/DataMockUtil"));
var EnglishWords = new (require("./EnglishWords"));

function EnglishNameModel() {}

EnglishNameModel.prototype.maleNames = [
	'Abel','Adel','Adam','Alex','Alexander','Amand','Armand','Art','Arthur','Anthony','Aston','Athen','Austin','August', 
	'Barney','Barnaby','Bernard','Bill','Blake','Bob','Brix','Buster','Bruce','Cam','Cameron','Cather',
	'Charles','Carl','Cary','Calvin','Chester','Clement','Cody','Cole','Collin','Conn','Connell',
	'Cryst','Cullen','Dallas','Daniel','David','Donald','Donnell','Dwight', 
	'Ed','Emmet','Emil','Eric','Frank','Fred','Gabriel','Gary','George',
	'Harold','Harral','Hort','Hugh','Horace','Ignace', 
	'James','Jacob','Jake','Jack','Jeff','Jeffer','Jonas','Jon','Joseph','John','Jonathan', 
	'Kather','Keith','Kevin','Kenneth','Lauder','Leland','Leo','Leon','Leonard','Louis','Luke','Lucas','Lyle',
	'Marion','Martin','Matthew','Malcolm','Malley','Mark','Margar','Max','Michael','Morris',
	'Paul','Peter','Philip','Rax','Rex','Rix','Rollin','Roy','Ronald', 
	'Sam','Samuel','Sander','Shane','Simon','Spencer','Steve','Steven','Stephen','Sullivan','Thomas','Theo','Timothy', 
	'Warren','Wayne','Wend','William','Willis','Xavier','Yancy','Zachary','Zed','Zimmer' 
];

EnglishNameModel.prototype.femaleNames = [
	'Abigail','Alanis','Alexis','Alice','Allison',
	'Anne','Barbara','Belinda','Bernadette','Berenice','Bess','Beth','Bethany','Betty',
	'Beverley','Bonnie','Brenda','Carol',
	'Cate','Cathy','Charlene','Cher','Cheryl','Charlot','Charlotte',
	'Chloe','Cleo','Courtney','Danielle','Diana','Donna',
	'Elizabeth','Eunice','Gabriel','Jane','Jennifer',
	'Jean','Joan','Joanne','Julie','Kay','Kat','Kate','Katrina','Kim','Linda','Liz','Liza','Martha','Mary',
	'Melissa','Patty','Patricia','Patrice','Sandra','Sarah','Susan','Ursula',
	'Venus','Veronica','Victoria','Winifred','Zoe'
];

EnglishNameModel.prototype.feminineSuffixes = [
	'a','al','e','el','elle','ene','ence','ense','ensce','et','ette','ille','ilyn','iline','ine','ita','y','yn'
];

// Prefixes that do not end in a vowel.
EnglishNameModel.prototype.namePrefixes1 = [
	'Am','Bol','Car','Donn','Ed','Em','Es','Flor','Foll','Ger','Haw','How','Mor','Nor','Os','Pay','Pey',
	'Rey','Scan','Sig','Sus','Wes','Wal','Wil','Win'
];

// Prefixes that end in a vowel (and thus pair only with those beginning with consonants).
EnglishNameModel.prototype.namePrefixes2 = [
	'Au','Lo','Madi','Ro','Sco','Tru'
];

EnglishNameModel.prototype.nameSuffixes1 = [
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
	'Brady','Coolidge','Cook','Cooper','Davis','Dublin','Ford','Grant',
	'Jones','King','Lincoln','London','Nixon','Prichard',
	'Reagan','Shreve','Smith','Taft','Weaver',
	'Bee','Cee','Dee','Gee','Jay','Kay','Pee','Tee','Vee'
];

this.surnameNamePrefixes = [
	"O'","Mc","Fitz","Bar"
];

surnamePrefixes = [
	'An','Angel','Bal','Balti','Bar','Beach','Blay','Bix',
	'Bomb','Bor','Brine','Brook','Brow','Bur','Butt','Butter','Cald','Cart','Castle','Clin',
	'Corn','Crom','Darn','Dor','Duke','Edin','Farn',
	'Fill','Fur','Gan','Glen','Glou','Glu','God','Gor','Gos','Grant','Hair',
	'King','Lady','Lan','Leo','Lin','Liver','Lord','Love','Man',
	'Moon','Mum','Mur','Paper','Peter','Price','Prince','Queen',
	'Rain','River','Rud','Rums','Rut','School','Shakes','Shef','Sher','Ship',
	'Shutter','Shuttle','Sim','Steven',
	'Sun','Thom','Wads','Wal','War','Washing','Weather','Wil',
	'Wind','Wor'
];
this.surnamePrefixes = surnamePrefixes.concat(
	EnglishWords.cardinalNumbers,EnglishWords.ordinalNumbers,
	EnglishWords.adjectives,EnglishWords.animals,EnglishWords.colors,EnglishWords.directions,
	EnglishWords.ethnicities,EnglishWords.plants,EnglishWords.substances,EnglishWords.timeWords
).map(DMU.toTitleCase);

// We probably don't want to pregenerate all of the possible names, 
// since the number of combinations is in the thousands.

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