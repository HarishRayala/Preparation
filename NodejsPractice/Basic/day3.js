// To create a file;

const fs = require("fs");

fs.open("test1.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("created");
});

// to write file

fs.writeFileSync("test1.txt", "Entered something");

// to readfile in Asynchronous

fs.readFile("test1.txt", { encoding: "utf-8" }, (err, data) => {
  console.log("data inside test1.txt:", data);
});

// to readfile in synchronous
const data = fs.readFileSync("test1.txt", { encoding: "utf-8" });
console.log("this is synchronous:", data);

// to append data in synchronous

const addedline = fs.appendFileSync("test1.txt", "added some extra line ");

// to append data in asynchronous mode

fs.appendFile("test1.txt", "added second line", (err, file) => {
  if (err) throw err;
});

// to rename a file
// fs.rename("./test1.txt", "./test2.txt", (err) => {
//   if (err) throw err;
// });

// to remove a file in synchronous
// fs.unlinkSync("./test2.txt");

// to remove file in async
fs.unlink("test1.txt", (err) => {
  if (err) throw err;
  console.log("removed");
});
