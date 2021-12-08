//!Synchronous vs Asynchronous

console.log("doing some magic");
console.log("doing some amazing magic");

//line by line
//We don't want our code to block because we want to continue with our application and not freeze our program for example:
//! Blocking code
console.log("doing some code");
alert("STOP EVERYTHING AND BLOCK THE CODE ");
console.log("doing some more code");

//! Event loop to the rescue

console.log("doing some amazing code");
setTimeout(() => {
  console.log("getting data from the server, ill be back soon");
}, 1000);
console.log("doing more amazing code");

//!WEB API's
//* DOM(Document) --> window.document
//* setTimeOut ---> window.setTimeOut
//* setInterval ----> window.setInterval
//* Ajax call ---> window.XMLHttpRequest

//!Call stack
//* We need a place to keep track of what's happening to our code line by line. A stack takes that control

//! Memory Heap
//* We need a place to store and write information (variables, objects etc) the heap is where it is stored and retrieved when needed.

//! Callback Queue
//* we need a place to queue our asynchronous code, once the call stack is empty, yalla go to the call stack

//! Event Loop
//* We need a middle man between our callback queue and call stack to check when the call stack is empty to push our asynchronous code to the stack. Event loop is our man/woman for the job.

//! Promises
//* A container for a future value

//!A promise can be in 3 states
//*pending ----> async task ---> settled --->
//* fulfilled/successed
//* rejected

//! A promise object gets a callback function that has 2 parameters
//*resolve, reject

//! When a promise is settled we can get their value from:
//* .then if it was a fulfilled
//*.catch if it was rejected
//* they both receive a callback function and their first parameter is the value from the promise

//! The 3 states of a Promise

//*fulfilled and rejected
const myPromise = new Promise((resolve, reject) => {
  const fetchingData = true;
  if (fetchingData) {
    resolve("Got the data");
  } else {
    reject("didn't get the data, sending error message");
  }
});

console.log(myPromise);
//since the promise resolved right away we weren't able to inspect the state of the promise so lets give it a timeout

//* pending
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const fetchingData = true;
    if (fetchingData) {
      resolve("Got the data");
    } else {
      reject("didn't get the data, sending error message");
    }
  }, 2000);
});
//resolve if true and reject if false

//* my promise value is always pending, cant get the value from it :*(
console.log(myPromise2);

//! Consuming promises
//There is a prototype method in a Promise object called .then where you can return promises once they are settled
myPromise2
  .then((success) => {
    console.log("success", success);
  })
  .catch((error) => {
    console.log(error);
  });

//! Promise chaining
const myOtherFunc = (data) => {
  console.log("im here now");
  return new Promise((resolve, reject) => {
    const fetchingData = true;
    setTimeout(() => {
      if (fetchingData) {
        data.newProperty = "new Value";
        resolve(data);
      } else {
        reject(`Was a failure ${name}`);
      }
    }, 1000);
  });
};
const newPromise = new Promise((resolve, reject) => {
  const fetchingData = true;
  setTimeout(() => {
    if (fetchingData) {
      resolve({ name: "Pini" });
    } else {
      reject("Was a failure");
    }
  }, 1000);
});

newPromise
  .then((result) => {
    return myOtherFunc(result);
  })
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log({ error });
  });

//! Promises returning from a function

const myFuncPromise = (name, bool) => {
  return new Promise((resolve, reject) => {
    const fetchingData = bool;
    setTimeout(() => {
      if (fetchingData) {
        resolve(`Was a success ${name}`);
      } else {
        reject(`Was a failure ${name}`);
      }
    }, 1000);
  });
};

myFuncPromise("Pini", false)
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });

// //!Fetching data returns a promise

const myFunc = (name) => {
  console.log("hi");
  return fetch(`https://restcountries.com/v3.1/name/${name}`);
  // .then((response) => response.json())
  // .then((data) => {
  //   const target = document.body;
  //   const el = document.createElement("h2");
  //   el.textContent = data[0].borders;
  //   target.appendChild(el);
  //   return data;
  // });
};
myFunc("finland")
  .then((x) => {
    console.log({ x });
  })
  .catch((y) => {
    console.log({ y });
  });
