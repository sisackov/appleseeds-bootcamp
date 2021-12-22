// function retrieveAllLocalStorageItems() {
//     let keys = Object.keys(localStorage);
//     let itemsMap = [];
//     keys.forEach((key) => {
//         itemsMap.set(key, localStorage.getItem(key));
//     });
//     return itemsMap;
// }

function saveToLocalStorage(key, value, isMap = false) {
    if (isMap) {
        localStorage.setItem(key, JSON.stringify(Array.from(value.entries())));
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function getFromLocalStorage(key, isMap = false) {
    if (isMap) {
        return new Map(JSON.parse(localStorage.getItem(key)));
    }
    return JSON.parse(localStorage.getItem(key));
}

//* clears the local storage
localStorage.clear();
console.log(localStorage);

//* Store 5 different values in local storage
for (let i = 0; i < 5; i++) {
    localStorage.setItem(`Key-${i + 1}`, (i + 5) ** 2);
}
console.log(localStorage);

//* Retrieve all 5 values from local storage
console.log(localStorage.getItem('Key-1'));
console.log(localStorage.getItem('Key-2'));
console.log(localStorage.getItem('Key-3'));
console.log(localStorage.getItem('Key-4'));
console.log(localStorage.getItem('Key-5'));

//* Remove 2 values from local storage
localStorage.removeItem('Key-2');
localStorage.removeItem('Key-4');

//* With a for loop retrieve all keys from local storage
const keys = [];
for (const [key, value] of Object.entries(localStorage)) {
    keys.push(`${key}`);
}
console.log(keys);
console.log(Object.keys(localStorage));

//* clears the local storage
localStorage.clear();
console.log(localStorage);

//* Store an array and object in local storage
const arr = [12, 546, 767875, 32];
const obj = {
    first: 'first',
    last: 'last',
};
saveToLocalStorage('array', arr);
saveToLocalStorage('object', obj);
console.log(localStorage);

//* Retrieve the array and object from local storage
const retrievedArr = getFromLocalStorage('array');
const retrievedObj = getFromLocalStorage('object');
console.log(retrievedArr, typeof retrievedArr);
console.log(retrievedObj, typeof retrievedObj);
