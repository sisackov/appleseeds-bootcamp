function getFormattedDate() {
  let dt = new Date();
  let weekday = dt.toLocaleString("en", { weekday: "long" });
  let day = dt.toLocaleString("en", { day: "numeric" });
  let month = dt.toLocaleString("en", { month: "long" });
  let year = dt.toLocaleString("en", { year: "numeric" });
  return `Today is ${weekday} the ${day} of ${month}, ${year}`;
}

console.log(getFormattedDate());
