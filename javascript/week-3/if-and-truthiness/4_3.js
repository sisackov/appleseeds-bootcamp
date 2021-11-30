const avg = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

let johnTeam = {
  player: "John",
  scores: [89, 120, 103],
};
let mikeTeam = {
  player: "Mike",
  scores: [116, 94, 123],
};

const decideWinner = (teamA, teamB) => {
  let avgA = avg(teamA.scores);
  let avgB = avg(teamB.scores);
  if (avgA > avgB) {
    return `${teamA.player}'s team won with an average score of ${avgA}`;
  } else if (avgB > avgA) {
    return `${teamB.player}'s team won with an average score of ${avgB}`;
  }
  return `There is a draw! Both teams have an average score of ${avgA}`;
};

console.log(decideWinner(mikeTeam, johnTeam));

mikeTeam.scores = [102, 98, 97];
johnTeam.scores = [86, 108, 103];
console.log(decideWinner(mikeTeam, johnTeam));

mikeTeam.scores = [85, 98, 91];
johnTeam.scores = [89, 118, 103];
console.log(decideWinner(mikeTeam, johnTeam));

let maryTeam = {
  player: "Mary",
  scores: [97, 134, 105],
};

console.log(decideWinner(maryTeam, johnTeam));
console.log(decideWinner(maryTeam, mikeTeam));
