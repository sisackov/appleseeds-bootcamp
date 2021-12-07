const leapYear = (year) => {
  isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    console.log("it is indeed a leap year");
  } else {
    console.log("This is not a leap year");
  }
};

leapYear(2100);
