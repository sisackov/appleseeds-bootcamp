export const data = [
    {
        id: 111,
        name: 'John',
        birthday: '1-1-1995',
        favoriteFoods: {
            meats: ['hamburgers', 'sausages'],
            fish: ['salmon', 'pike'],
        },
    },
    {
        id: 222,
        name: 'Mark',
        birthday: '10-5-1980',
        favoriteFoods: {
            meats: ['hamburgers', 'steak', 'lamb'],
            fish: ['tuna', 'salmon', 'barracuda'],
        },
    },
    {
        id: 333,
        name: 'Mary',
        birthday: '1-10-1977',
        favoriteFoods: {
            meats: ['ham', 'chicken'],
            fish: ['pike'],
        },
    },
    {
        id: 444,
        name: 'Thomas',
        birthday: '1-10-1990',
        favoriteFoods: {
            meats: ['bird', 'rooster'],
            fish: ['salmon'],
        },
    },
    {
        name: 'Johnny',
        birthday: '1-10-1992',
        favoriteFoods: {
            meats: ['hamburgers', 'lamb'],
            fish: ['anchovies', 'tuna'],
        },
    },
];

export function getValues(arr, property) {
    return arr.map((obj) => obj[property]);
}

export function getNames() {
    return getValues(data, 'name');
}

export function getBornBefore(arr, year) {
    return arr.filter((obj) => {
        return new Date(obj.birthday).getFullYear() < year;
    });
}
