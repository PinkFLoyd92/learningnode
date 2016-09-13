var fs  = require('fs');
var dir = process.argv[2];
fs.readdir(dir, function (err, list) {
    var filter = process.argv[3];
    list = list.filter(function (element) {
        if(element.indexOf(("."+filter).toString())>=0) return true;
        return false;
    })
    var length = list.length;
    for(var i = 0; i < list.length; i++) {
	console.log(list[i]);
    }
});
