const csv = require("csv-parser");
const fs = require("fs");
const uuid = require("uuid");
const wordcut = require("wordcut");

const createIndex = file => {
  wordcut.init();

  let t1 = Date.now();
  const results = [];
  fs.createReadStream(file)
    .pipe(csv())
    .on("data", data => {
      data.tokenized = wordcut
        .cut(data.chapterName)
        .split("|")
        .join(" ");
      data.id = uuid.v4();
      results.push(data);
    })
    .on("end", () => {
      console.log(results);
      fs.writeFileSync("./index.json", JSON.stringify(results));
      console.log(`finished in ${Date.now() - t1 / 1000}sec 🔥`);
    });
};

module.exports = {
  createIndex: createIndex
};
