var fs = require('fs')

// fs.readFile(process.argv[2], function(err, data) {
//     if(err) throw err;
//     var file = data.toString();
//     console.log(file.split('\n').length-1)
// })

var file = fs.readFileSync(process.argv[2],"utf8");
console.log(file.split('\n').length - 1);
