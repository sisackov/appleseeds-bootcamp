/**
*?  1.  Q - What is wrong with the code ? explain in your own words
**      A - The code is not working because the this in getStrength points to the global object.
**          The function whoIsStronger is not bound to the object.
**  2. Fix the code so that invoking the whoIsStronger function will print "I am stronger".
*       !note: you cannot change the 'hero' or the whoIsStronger function.


*/

const person = {
    name: 'Yoni',
    print1: function () {
        console.log(this.name);
        setTimeout(this.print2.bind(this), 1000);
    },
    print2: function () {
        console.log(this.name);
    },
}

person.print1();
