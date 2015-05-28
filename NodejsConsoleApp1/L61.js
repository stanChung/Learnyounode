var fs = require('fs');
var pth = require('path');
var ary = [];

module.exports = function (pathName, ext, callback) {
    fs.readdir(pathName, function (err, list) {
        if (err)
            return callback(err);

        list.forEach(function (value) { 
            if (pth.extname(value).replace('.', '') === ext)
                ary.push(value);
        });
        
        return callback(null, ary);
    });
};