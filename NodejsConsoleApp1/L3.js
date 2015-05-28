var fs = require('fs');
var fname = process.argv[2];
var buf = fs.readFileSync(fname);
var arySplit = buf.toString().split('\n');
console.log(arySplit.length-1);