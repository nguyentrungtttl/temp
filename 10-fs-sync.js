const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/second.txt", "utf-8");

console.log(firstFile, secondFile);

writeFileSync(
  "./content/result.txt",
  `here is the result ${firstFile} ${secondFile}`
);
console.log(readFileSync("./content/result.txt", "utf-8"));

console.log('done with this task');
console.log('starting the next one');
