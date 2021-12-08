const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book(){}
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Timmmyyyyy Wes");
lufthansa.book(635, "Johnny Smith");
console.log("lufthansa", lufthansa);
//after some years Lufthansa group created a new airline

const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

//we also want to take bookings to our eurowings flight. Taking the same method above (book) and simply copying and pasting is bad practice. So we store this method in a variable so we can reuse it for all our different airlines.

const book = lufthansa.book;
//we can do this because js has first class functions . Functions are simply values.
book(23, "Sarah Hart");
// book function is just a regular function call. It's no longer the method. As we learned before a regular function call the this keyword points to window.
// We need to set the this key word to the eurowings object. We can do that with bind, apply and bind.
//*call
// call method, first parameter is what we want the this keyword to bind to
book.call(euroWings, 23, "Pini Hodadad");
console.log(euroWings);
// the call method will call the book function with the this keyword set to euroWings
book.call(lufthansa, 222, "Timmy");
console.log(lufthansa);

//*apply
//appy is the same as call but it doesn't take a list of arguments it takes an array of arguments
const flightData = [567, "Adam Sandler"];
book.apply(lufthansa, flightData);
//not used anymore because we have the spread operator
book.call(lufthansa, ...flightData);

//*bind
//bind always allows us to manually set the this keyword in any function call. bind returns a new function but it doesn't call it for us.
const bookLH = book.bind(lufthansa);
//bookLH(23,"pini")

//bind method we can give them the arguments ahead of time as well
//lets say we want to create a function for a specific airline and a specific flight number
const bookEW23 = book.bind(euroWings, 23);
//now this function only needs the name because I preset flight number as a paramater
bookEW23("Pini");
console.log(euroWings);

//*eventlisteners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector("button")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
