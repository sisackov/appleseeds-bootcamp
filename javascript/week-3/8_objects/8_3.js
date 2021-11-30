let book1 = {
    name: 'Catch-22',
    author: 'Joseph Heller',
    year: 1961
}

let book2 = {
    name: 'Guys and Dolls',
    author: 'Damon Runyon',
    year: 1931
}

let bookUtils = {
    getFirstPublished: (bookA, bookB) => (bookA.year < bookB.year ? bookA : bookB),
    setNewEdition: (book, editionYear) => {
        book['latestEdition'] = editionYear;
    },
    setLanguage: (book, language) => (book['language'] = language),
    setTranslation: (book, language, translator) => {
        book['translation'] = { translator, language };
    },
    setPublisher: (book, name, location) => {
        book['publisher'] = { name, location };
    },
    isSamePublisher: (bookA, bookB) => {
        if (!bookA.publisher || !bookB.publisher) {
            return false;
        }

        for (let key in bookA.publisher) {
            if (bookA.publisher[key] !== bookB.publisher[key]) {
                return false;
            }
        }
        return true;
    }
};

/* 3 */
console.log(bookUtils.getFirstPublished(book1, book2));

/* 4 */
console.log(book1);
bookUtils.setNewEdition(book1, 1974);
console.log(book1);

/* 5 */
console.log(book2);
bookUtils.setLanguage(book2, 'hebrew');
console.log(book2);

/* 6 */
console.log(book1);
bookUtils.setTranslation(book1, 'hebrew', 'Shaul Tchernichovsky');
console.log(book1);

/* 7 */
console.log(book2);
bookUtils.setPublisher(book2, 'Penguin Classics', 'London, England');
console.log(book2);

/* 7 */
console.log('isSamePublisher ', bookUtils.isSamePublisher(book1, book2));//false - undefined in book1
bookUtils.setPublisher(book1, 'Penguin', 'New York, NY, USA');
console.log('isSamePublisher ', bookUtils.isSamePublisher(book1, book2));//false
bookUtils.setPublisher(book1, 'Penguin Classics', 'London, England');
console.log('isSamePublisher ', bookUtils.isSamePublisher(book1, book2));//true
