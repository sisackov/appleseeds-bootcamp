const willGetYouADog = new Promise((resolve, reject) => {
	const rand = Math.random();
	if (rand < 0.5) {
		resolve();
	} else {
		reject();
	}
});
willGetYouADog.then(() => {
	//runs on resolve
	console.log('YAY WE GOT A DOG!!!!');
});
willGetYouADog.catch(() => {
	//reject throws an error which is caught here
	console.log(':( NO DOG');
});
