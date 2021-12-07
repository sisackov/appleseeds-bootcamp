const getCurrentDate = () => {
  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[d.getDay()];
  const day = d.getDay();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  console.log(`Today is ${dayName} the ${day} of ${month}, ${year} `);
};
getCurrentDate();

//other way
// const date = new Date(Date.now());
// const options = {
//   weekday: { weekday: "long" },
//   month: { month: "long" },
// };
// const dayOfWeek = date.toLocaleDateString(undefined, options.weekday);
// console.log(dayOfWeek);
// const dayOfMonth = date.getDate();
// console.log(dayOfMonth);
// const month = date.toLocaleDateString(undefined, options.month);
// console.log(month);
// const year = date.getFullYear();
// console.log(year);
