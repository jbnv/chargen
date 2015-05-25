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
// arguments[1..]: Arrays to pick 
DataMockUtil.prototype.pickElements = function(rand) {
	pickedElements = [];
	result = "";
	u = rand;
	for (i = 1; i < arguments.length; i++) {
		array  = arguments[i];
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