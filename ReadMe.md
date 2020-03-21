# Brownie-Search

### Thai Full-Text Search Engine with NLP and Fuzzy logic

using wordcut and minisearch

```
npm install brownie-search@0.0.2
```

### To Create Index

```
const Brownie = require('./brownie-search');
Brownie.createIndex('./MyDataSource.csv')
```

### To Search

```
const Brownie = require('./brownie-search');
Brownie.search('ขนมเยอะๆ')
```
