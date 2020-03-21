let t1 = Date.now();

const tokenized = require("../index.json");
const MiniSearch = require("minisearch");

let miniSearch = new MiniSearch({
  fields: ["chapterName", "tokenized"], // fields to index for full-text search
  storeFields: ["chapterName", "type", "level", "subject"] // fields to return with search results
});

miniSearch.addAll(tokenized);

const search = q => {
  return miniSearch.search(q, { prefix: true, fuzzy: 0.2 });
};
module.exports = {
  search: search
};
