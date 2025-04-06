const { sum, sub, mul } = require("./myFirst");
console.log("sum", sum(5, 6));
console.log("sub", sub(5, 6));
console.log("mul", mul(5, 6));

// routing by http
const http = require("http");
const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home route</h1>");
    res.end("<h1>Newyork Nagaram Nidaroye vela</h1>");
  } else if (req.url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        id: "101",
        "product-type": "lip stick",
        category: "cosmetics",
        brand: "mac",
      })
    );
    res.end(
      JSON.stringify({
        id: "102",
        "product-type": "serum",
        category: "skin care",
        brand: "alps",
      })
    );
  }
});

server2.listen(8081);

// File System

// ✅ Load the built-in 'fs' (File System) module in Node.js
const fs = require("fs");

// ✅ Create a new file named 'test1.txt' using fs.open()

// 'w' stands for "write" mode – it creates the file if it doesn't exist
// Mode	Description
// "r+"	Read and write (fails if file doesn’t exist)
// "w"	Write only (creates file if not exists, empties it if it does)
// "a"	Append mode (writes to end of file)
const newFile = fs.open("test.txt", "w", function (err, file) {
  if (err) throw err; // If there's an error, throw it
  console.log("saved!"); // If successful, print "saved!"
});

// ✅ Write content into 'test.txt' using fs.writeFileSync()
// This is a synchronous method – it blocks other code until done
fs.writeFileSync("./test.txt", "writing inside test through fs");
