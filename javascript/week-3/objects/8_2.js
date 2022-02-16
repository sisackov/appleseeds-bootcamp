/* 1. Create an object called ‘mycountry’ */
let myCountry = {
    country: 'Dagestan',
    capital: 'Makhachkala',
    language: 'a multitude of languages',
    population: 2.9,
    neighbours: ['Azerbaijan', 'Georgia', 'Chechnya', 'Kalmykia'],
    /* 2. Add a method to the object called 'describe' to the 'myCountry' object */
    describe() {
        console.log(`${this.country} has ${this.population} million people, \
    their mother tongue is ${this.language}, they have ${this.neighbours.length} \
    neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland() {
        this['isIsland'] = !this.neighbours.length ? true : false;
    },
};

/* 3. Call the ‘describe method’. */
myCountry.describe();

/* 4. Add a method called 'checkIsland' */
console.log(myCountry.isIsland); //undefined
myCountry.checkIsland();
console.log(myCountry.isIsland); //returns value

// console.log(myCountry);
