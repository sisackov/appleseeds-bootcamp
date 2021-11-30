const maxCount = 1000000;

let emptyObj = {};
console.time("Object assign measure");
for (let i = 0; i < maxCount; i++) {
    emptyObj[i] = i;
}
console.timeEnd("Object assign measure");


let emptyMap = new Map();
console.time("Map assign measure");
for (let i = 0; i < maxCount; i++) {
    /* wrong way to assign values to a Map. 
    See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#setting_object_properties
    */
    // emptyMap[i] = i;
    emptyMap.set(i, i); // the correct way 
}
console.timeEnd("Map assign measure");


let o, m, id;
const getRandomId = () => (Math.floor(Math.random() * maxCount));
/**
 * Who can find faster a specific property from itself?
 */
id = getRandomId();
console.time("Object find measure");
o = emptyObj[id];
console.timeEnd("Object find measure");

console.time("Map find measure");
m = emptyMap.get(id);
console.timeEnd("Map find measure");



/**
 * Who is faster in adding a single entry?
 */
id = maxCount + 123;
console.time("Object add single entry measure");
emptyObj[id] = id;
console.timeEnd("Object add single entry measure");

console.time("Map add single entry measure");
emptyMap.set(id, id);
console.timeEnd("Map add single entry measure");


/**
 * Who is faster in deleting a single entry?
 */
id = getRandomId();
console.time("Object delete single entry measure");
delete emptyObj[id];
console.timeEnd("Object delete single entry measure");

console.time("Map delete single entry measure");
emptyMap.delete(id);
console.timeEnd("Map delete single entry measure");