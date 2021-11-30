// console.log()

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        return true;
    }
    return false;
}

const checkLeapYear = (year) => {
    if (isLeapYear(year)) {
        console.log('It is indeed a leap year');
    } else {
        console.log('This is not a leap year');
    }
}

// console.log(isLeapYear(1571));//false
// console.log(isLeapYear(2012));//true
// console.log(isLeapYear(2100));//false
// console.log(isLeapYear(2400));//true