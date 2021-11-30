const inRange = (num, low, high) => num >= low && num <= high;

const gradeAssigner = function (grade) {
  let assigned = "Incorrect input!";
  if (inRange(grade, 90, 100)) {
    assigned = "A";
  } else if (inRange(grade, 80, 89)) {
    assigned = "B";
  } else if (inRange(grade, 70, 79)) {
    assigned = "C";
  } else if (inRange(grade, 65, 69)) {
    assigned = "D";
  } else if (inRange(grade, 0, 64)) {
    assigned = "F";
  }

  return assigned;
};
