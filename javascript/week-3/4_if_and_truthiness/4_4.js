
// const includesSeven = (num) => num.toString().indexOf("7") !== -1;
const includesSeven = (num) => {
    let arr = [];
    while (num !== 0) {
        arr.push(num % 10);
        num = num / 10;
    }

    return arr.includes(7);
};

console.log(includesSeven(7248));

function boom(n) {
    let str = "Argument is invalid!";
    if (typeof n === 'number' && n > 0) {
        str = '';
        for (let num = 1; num <= n; num++) {
            if (num % 7 === 0) {
                if (includesSeven(num)) {
                    str += "BOOM-BOOM, ";
                } else {
                    str += "BOOM, ";
                }
            } else {
                str += `${num}, `;
            }
        }
        str = str.substring(0, str.lastIndexOf(","));//remove last comma
    }

    return str;
}
