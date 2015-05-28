var fs = require('fs');
var fname = process.argv[2];
fs.readFile(fname, function (err, data) {
    var arySplit = data.toString().split('\n');
    console.log(arySplit.length - 1);
});
