var fs = require("fs");

for (let i = 33; i < 44; i++) {
  let dir = "./udemy/" + i;
  console.log(dir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
