var filter = require('./L61.js');
var pathName = process.argv[2];
var ext = process.argv[3];

filter(pathName, ext, function (err, list) {
    if (err)
        console.log(err.message);
    else
        list.forEach(function (value) {
            console.log(value);
        });
});