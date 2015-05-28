var fs = require('fs');
var pth = require('path');
var pathName = process.argv[2];
var ext = process.argv[3];
fs.readdir(pathName, function (err, list) {
    list.forEach(function (value) {
        if (pth.extname(value).replace('.','') === ext)
            console.log(value);
    });
});