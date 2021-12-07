const people = ['Greg', 'Mary', 'Devon', 'James'];
const countries = ['Nigeria', 23/* 'Canada' */, 'Brazil', 'Australia'];

const PROMISE_STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
};

class Response {
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
}

function makeAllCaps(wordsArr) {
    return new Promise((resolve, reject) => {
        const allCaps = wordsArr.map((word) => {
            if (typeof word !== 'string') {
                reject(new Response(PROMISE_STATE.REJECTED, `${word} in [${wordsArr}] is not a string`));
            }
            return word.toUpperCase();
        });
        resolve(new Response(PROMISE_STATE.FULFILLED, allCaps));
    });
}

function sortWords(wordsArr) {
    return new Promise((resolve, reject) => {
        const sortedWords = wordsArr.sort((a, b) => {
            if (typeof a !== 'string' || typeof b !== 'string') {
                reject(new Response(PROMISE_STATE.REJECTED, `${a} in [${wordsArr}] is not a string`));
            } else if (typeof b !== 'string') {
                reject(new Response(PROMISE_STATE.REJECTED, `${b} in [${wordsArr}] is not a string`));
            }
            return a.localeCompare(b);
        });
        resolve(new Response(PROMISE_STATE.FULFILLED, sortedWords));
    });
}

[people, countries].forEach(arr => {
    console.log(arr);
    makeAllCaps(arr).then(res => {
        console.log(res.status, res.data);
        return sortWords(res.data);
    }).then(res => {
        console.log(res.status, res.data);
    }).catch(err => {
        console.log(err);
    });
});

