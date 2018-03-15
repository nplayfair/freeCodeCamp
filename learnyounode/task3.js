var fs = require('fs');

// read file from command line to buffer
var file = fs.readFileSync(process.argv[2]);
// covert to string
str = file.toString();
arr = str.split('\n');
console.log(arr.length - 1);