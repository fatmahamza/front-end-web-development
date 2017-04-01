// This is an object
var bob = {};

// Objects have properties
// Netflix movies


var orangeIsTheNewBlack = {
	avrgRating: 4,
	viewsToDate: 123,
	category: 'drama'
};

var lukeCage = {
	avrgRating: 5,
	viewsToDate: 12,
	category: 'action'
};

// An object's properties can be accessed using "dot notation"
console.log(orangeIsTheNewBlack.avrgRating);
console.log(lukeCage.category);


var category1 = orangeIsTheNewBlack.category;


// An object's properties can also be accessed using "bracket notation"
console.log(orangeIsTheNewBlack['avrgRating']);
var views1 = lukeCage['viewsToDate'];