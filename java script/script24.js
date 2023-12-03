//  C R U D
const fs = require ("fs");
 const htmlboilerplate = "this is dummy data";

// taking input from command line
// const [,, filename] = process.argv;
// const filename = process.argv[2];

// creating a file
fs.writeFileSync("index.html", htmlboilerplate);
console.log("file created");

// reading the file
const data = fs.readFileSync("main.html","utf-8");
console.log(data);

// updating the file
fs.appendFileSync("index.html",htmlboilerplate);

// deleting the file
fs.unlinkSync("index.html");
console.log("file deleted");

// rename the file
fs.renameSync("index.html","main.html");
console.log("file renamed");