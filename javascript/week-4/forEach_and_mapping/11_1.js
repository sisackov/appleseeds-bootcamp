const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];


function forEachLoop(arr) {
    let res = [...arr];//copy of the original
    res.forEach(function (release, i, array) {//need to replace each item in the array by assigning
        array[i] = {
            id: release.id,
            name: release.title
        };
    });
    return res;
}

console.log(forEachLoop(newReleases));


function mapLoop(arr) {
    return newReleases.map(function (release) {
        return {
            id: release.id,
            name: release.title
        }
    });
}

console.log(mapLoop(newReleases));

/**
 * forEach: This iterates over a list and applies some operation
 * with side effects to each list member
 * (example: saving every list item to the database) and does not return anything.
 *
 * map: This iterates over a list, transforms each member of that list,
 * and returns another list of the same size with the transformed members
 * (example: transforming list of strings to uppercase).
 * It does not mutate the array on which it is called
 * (although if passed a callback function, it may do so).
 */