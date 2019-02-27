/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding - this looks for things in the window
* 2. Implicit Binding - binds to the object before the dot
* 3. Explicit Binding - forces binding call, appl, bind...
* 4. New Biding - binds new objects with new keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


var myFunction = function() {
   console.log(this);
}

myFunction();

// Principle 2

// code example for Implicit Binding


function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();


// Principle 3

// code example for New Binding

function greet() {
	console.log(this.name);
}

var person = {
	name:'Louis',
};

greet.call(person);

// Principle 4
//code example for Explicit Binding


function Foo() {        

    this.name = 'Louis';
	this.say = function () {
	return "I am " + this.name; 
   };

}

var name = 'Roman';
var result = new Foo();
console.log(result.name);





