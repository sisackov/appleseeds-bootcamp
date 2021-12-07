
const isGreaterThanTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve({ data: num, state: 'resolved' });
        } else {
            reject({ data: num, state: 'rejected' });
        }
    })
};

const promiseChecker = (n) => {
    let promiseStatus = isGreaterThanTen(n).then((response) => {
        console.log(`${response.data} is greater than 10`);
        return response.state;
    }).catch((response) => {
        console.log(`${response.data} is less than 10`);
        return response.state;
    });
    console.log(promiseStatus);
}

promiseChecker(5);
promiseChecker(15);

