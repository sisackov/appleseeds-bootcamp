let obj1 = {
    name: 'Object-1'
}
let obj2 = {
    name: 'Object-2'
}
let obj3 = {
    name: 'Object-3'
}

const getRandomId = () => (Math.floor(Math.random() * (10 ** 8 - 10 ** 3) + 10 ** 3));


let mapObj = new Map();
mapObj.set(obj1, getRandomId());
mapObj.set(obj2, getRandomId());
mapObj.set(obj3, getRandomId());

/**
 * Iterating over map object with for..of
 */
for (const [key, value] of mapObj) {
    console.log(`${key.name} --->  ${value}`);
}