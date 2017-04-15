// We know that an object is a data structure.  It contains a value and is referenced
// by an identifier - much like a variable.

// An "object" is a way to represent an entity with properties associated with it.
// Example:

var superman = {
	age = 35,
	alias = 'Clark Kent',
	location = 'Metropolis'
};

// We also know of two ways to create objects. Above, we created an object using
// object literal notation. Another way is using object constructor notation

var superman = new Object(); // same as:    var superman = {};
superman.age = 35;
superman.alias = 'Clark Kent';
superman.location = 'Metropolis';
superman.speed = 7200000;

// When do we use constructor notation? This is actually the more common way to
// create objects. This is used when the object has a function (an object's function is
// called a method).


// Methods can be used to change property values
superman.setSpeed = function(newSpeed) {
	superman.speed = newSpeed;
};

// Methods can be used to make calculations based on an objects property
superman.versusBullet = function() {
	var bulletSpeed = 1700;
	console.log('Superman is ' + (superman.speed - bulletSpeed) + 'mph faster than a bullet.');
};