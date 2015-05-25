function DataMockUtil() {
}

// Fractional modulus. 
DataMockUtil.prototype.fracmod = function(x) {
	return x - Math.floor(x);
}

DataMockUtil.prototype.randomElement = function(pArray) {
	return pArray[Math.floor(Math.random() * pArray.length)];
}

DataMockUtil.prototype.elementByOrdinal = function(pArray,ordinal) {
	return pArray[ordinal % pArray.length];
}

DataMockUtil.prototype.elementByPosition = function(pArray,u) {
	return pArray[Math.floor(u * pArray.length) % pArray.length];
}

// Pick an element from each array passed.
// rand: [0,1)
// start: [0,1) start of the range to cover.
// length: [0,1] length of the range to cover
// arguments[3..]: Arrays to pick 
DataMockUtil.prototype.pickElements = function(rand,start,length) {
	console.log("pickElements()",rand,start,length,arguments.length);
	pickedElements = [];
	result = "";
	u = (rand - start) / length; // map rand to [0,1)
	if (u < 0 || u >= 1 || u === NaN) {
		throw "Bad parameters: "+rand+","+start+","+length;
	}
	for (i = 3; i < arguments.length; i++) {
		array  = arguments[i];
		if (array == undefined) {
			throw "Attempting to reference an undefined array.";
		}
		selectedIndex = Math.floor(u * array.length);
		selectedElement = array[selectedIndex];
		if (pickedElements.reduce(function(prev,cur){ return prev && cur !== selectedElement.toLowerCase(); },true)) {
			result = result + selectedElement;
			pickedElements.push(selectedElement.toLowerCase());
		}
		u = u * array.length - selectedIndex;
	}
	return result;
}

module.exports = DataMockUtil;