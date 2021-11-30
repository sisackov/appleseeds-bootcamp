const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (const row of listOfNeighbours) {
    for (const item of row) {
        console.log(`Neighbour: ${item}`);
    }
}