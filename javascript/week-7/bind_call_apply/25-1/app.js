/**
*?  1.  Q - What is wrong with the code ? explain in your own words
**      A - The code is not working because the this in getStrength points to the global object.
**          The function whoIsStronger is not bound to the object.
**  2. Fix the code so that invoking the whoIsStronger function will print "I am stronger".
*       !note: you cannot change the 'hero' or the whoIsStronger function.
*/

const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
whoIsStronger(hero.getStrength.bind(hero));
