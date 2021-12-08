/*
There are two paradigm's in Modern JS.
Paradigm: Simply speaking it is the style of code, "how" we write and organize code.
There is functional programming and Object orientated programming.
JS is shifting more and more to functional programming but you can use it to in an OOP way too.

OOP:
OOP is a programming paradigm based on the concept of objects.
We use objects to model (describe) real world or abstract features.
Real world: todolist
abstract: HTML component.
Objects may contain data properties and methods. By using objects, we pack data and the corresponding behavior into one block. Like below

This is the blue print which we can create new objects. No real data yet:
User {
    user
    password
   
    login(password){
      ...login logic
    }
    sendMessage(str){
      ...sending logic
    }
}

We can then create instances of the Object to use its methods and properties it gives us.

const piniUser = new User("pini","5tgd","pini@gmail.com")
    


OOP In JS: Prototypes and function Constructors

Everything in JS are objects expect primitive data types.

All objects are linked to a prototype object.


A prototype contains methods. If a certain object is linked to that prototype, it can access its methods.
For example we can use the map method on an array because it is one of the methods the Array.prototype has.
When we create a new array we immedeaitly get the all the methods accessed to it thanks to the to its prototype.

const x = [1,2,3,4,5]
Question then is:
How can we create new objects?
How do we create prototypes?
How do we link objects to prototypes?


There are 3 ways.
Constructor functions
Es6 Classes
Object.create()

Constructor functions:
Its a technique to create objects from a function.
This is how built-in objects like Arrays, Maps or Sets are actually implemented.

Es6 Classes:
Modern alternative to constructor syntax.
They are just syntactic sugar, they work exactly like constructor functions.
Es6 classes do not behave the same way like classes in "classical OOP"

Object.create()
The easiest and most straightforward way of linking an object to a prototype object but it is not very used.


*/

// *Constructor Function
// Same as a normal function but the only difference is when we call it, we call it with the new operator.
///By convention we name our function with a captial.
//We cannot use arrow functions because it does not have its own this keyword.
const Person = function (firstName, birthYear) {
  console.log(this);
};

console.log(new Person("Timmy", 1990));
//because we put a new keyword before the function call the 4 things happen:
//1. a new empty {} is created
//2. when the function is called, this keyword points to the newly created empty {}
//3. newly created objects is linked to the functions prototype.
//4. function automatically returns the object {}

const Person2 = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//what ever we add to this empty object, thats what it will return to us.
//we now attach 2 properties to our object
//by convention we name it the same as our parameters

const harry = new Person2("Harry", 1995);
console.log(harry);
//we can create many new objects from this constructor function.
const mary = new Person2("Mary", 1990);
//Person is a blue print to the actual house. And the house is the newly created objects.
//you can say its an instance of the Person object even though it is not techincally OOP.
//We can test it like this:
console.log(harry instanceof Person2);

const Person3 = function (firstName, birthYear) {
  // properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //we can create methods as well. But don't do this!
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
// const johnny = new Person3("Harry", 1995);
// johnny.calcAge();
//but this is bad practice because each time you create an instance, this function will be carried with you even if you don't use it.

//We can use prototypes and prototypes inheritance to solve this problem

//*ProtoTypes
//Each and every object in JS automatically has a property called prototype, that includes of course constructor functions.Because they are objects as well.
//Every object that was created by the constructor function will get access to all the methods and properties that we define on the constructors prototype property.
Person3.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person3.prototype);
const jimmy = new Person3("Jimmy", 1985);
jimmy.calcAge();
//even though the method is not attached to the function itself we can access it thanks to prototype inheritance.
//write jimmy in the console to see you don't get it
//this method is being created only once and now we can reuse this method with all the objects we create.
//this keyword is also set to the object that is calling this method

//you can see the prototype of jimmy by doing this
console.log(jimmy.__proto__);

//the prototypes of jimmy are the same prototypes of the Person function
console.log(jimmy.__proto__ === Person3.prototype);
//Person3 does not have access to its own prototypes only its instances have access to it. Its like a machine producing methods but it cannot use the methods itself, only its children (instances)can.
//we can confirm it even further by doing:
console.log(Person3.prototype.isPrototypeOf(jimmy));
//but its not the prototype of Person
console.log(Person3.prototype.isPrototypeOf(Person3));
//you can check out now on top we said the "new object {} is linked to a prototype."
//so basically we get the prototype from the constructor function and links it to every new instance of it.
//it sets the prototype property to the object from the prototype property of the constructor function.
console.log("jimmy", jimmy);

//we can set properties on the prototype also
Person3.prototype.species = "Humans";
console.log(jimmy.species);
//it is not not directly attached to the jimmy object. But only by protoypes. You can check it by:
console.log(jimmy.hasOwnProperty("firstName"));
console.log(jimmy.hasOwnProperty("species"));

//prototype chain
//Question how can jimmy have access to a
// method called hasOwnProperty?
//as we learned it has access to its protoypes which come from Person3.
//Its because Person3 also has prototypes that it can access from its parent.
//if the direct father does not have the prototype, it will look at its father prototype until it finds it.
//Its like the scope chain. It looks for the prototype of its direct father, if it can't find it there it will go up the prototype chain until it finds it.
//Person3's prototypes is from Object.prototype which is the father of all objects. Objects protoype is null
//if we console.log this:
console.log(jimmy.__proto__.__proto__);
console.log(Object.prototype);

//lets create an array and find out their prototypes
const arr = [1, 2, 3, 4];
console.log(arr.__proto__);
//so each array we create does not contain these methods attached, each instance of the array inherits these methods from its prototypes.
console.log(arr.__proto__ === Array.prototype);
//The prototype of the Array constructor is gonna be the prototype of all the objects created by that constructor
//new Array()
//so this is how JS works, you can use all of these array methods to different instances of your created arrays and they only need to create these methods once osmewhere in the JS engine.
console.dir(document.querySelector("h1"));

//remember I said a function is an object?
console.dir((x) => x + 1);
