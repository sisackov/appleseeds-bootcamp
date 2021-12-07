var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
function booksToRead(library) {
  return library
    .filter((i) => {
      return i.readingStatus === true;
    })
    .map((i) => {
      return `Name: ${i.title}, Author: ${i.author}, reading Status: ${i.readingStatus}`;
    });
}
console.log(booksToRead(library));
