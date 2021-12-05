Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let item of this) {
        if (callback(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

Array.prototype.myFind = function (callback) {
    let found;
    for (let i = 0; i < this.length && found === undefined; i++) {
        if (callback(this[i])) {
            found = this[i];
        }
    }
    return found;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let previousValue = initialValue || this[0];
    for (let i = 1; i < this.length; i++) {
        previousValue = callback(previousValue, this[i]);
    }
    return previousValue;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Numbers: ', numbers);

console.log(
    'My filter (even numbers)',
    ...numbers.myFilter((item) => item % 2 === 0)
);
console.log(
    'JS filter (even numbers)',
    ...numbers.filter((item) => item % 2 === 0)
);

console.log(
    'My find (divides by 2 and 3)',
    numbers.myFind((item) => item % 2 === 0 && item % 3 === 0)
);
console.log(
    'JS find (divides by 2 and 3)',
    numbers.find((item) => item % 2 === 0 && item % 3 === 0)
);

console.log(
    'My reduce (array sum)',
    numbers.myReduce((prev, curr) => prev + curr)
);
console.log(
    'JS reduce (array sum)',
    numbers.reduce((prev, curr) => prev + curr)
);
