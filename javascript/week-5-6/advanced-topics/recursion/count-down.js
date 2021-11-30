function countDownLoop(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}
countDownLoop(5);


function countDownExplicit(number) {
    if (number === 0) {
        //base/terminal case with explicit return
        return;
    }
    countDownExplicit(number - 1);
    console.log(number);
}
countDownExplicit(5);


function countDownImplicit(number) {
    if (number > 0) {//terminal case with implicit return
        countDownImplicit(number - 1);
        console.log(number);
    }
}
countDownImplicit(5);




