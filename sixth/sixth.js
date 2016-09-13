var module = require('./module');

var dir = process.argv[2];
var ext = '.'+process.argv[3];
var callback = function (err, data) {
    if(err) return err;
    for(var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

module(process.argv[2], process.argv[3], callback);
