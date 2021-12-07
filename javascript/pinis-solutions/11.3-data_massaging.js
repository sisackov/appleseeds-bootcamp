const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1.get all the names and put them in an array

const names = (arr) => {
  return arr.map((item) => {
    return item.name;
  });
};

//2.get all the objects that are born before 1990

const born = (arr) => {
  return arr.filter((item) => {
    const split = item.birthday.split("-");
    const birthday = split[split.length - 1];
    if (birthday < 1990) {
      return item;
    }
  });
};

const born2 = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

//3.show a object of all the foods and their sequences

const foods = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.meats.forEach((meatFood) => {
      if (obj[meatFood]) {
        obj[meatFood] = obj[meatFood] + 1;
      } else {
        obj[meatFood] = 1;
      }
      // obj[meatFood] = obj[meatFood] + 1 || 1;
    });
    el.favoriteFoods.fish.forEach((fishFood) => {
      if (obj[fishFood]) {
        obj[fishFood] = obj[fishFood] + 1;
      } else {
        obj[fishFood] = 1;
      }
    });
  });

  return obj;
};

const foods2 = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.meats.forEach((meatItem) => {
      obj[meatItem] = obj[meatItem] + 1 || 1;
    });
    el.favoriteFoods.fish.forEach((fishItem) => {
      obj[fishItem] = obj[fishItem] + 1 || 1;
    });
  });

  return obj;
};
console.log(foods(data));
console.log(foods2(data));
