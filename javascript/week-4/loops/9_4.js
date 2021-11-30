function steps(n) {
    for (let i = 1; i <= n; i++) {
        let s = '';
        for (let j = 0; j < n; j++) {
            s += j < i ? '#' : '_';//using underscore to visualise the space
        }
        console.log(s);
    }
}

console.log(steps(3));