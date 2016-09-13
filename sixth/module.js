module.exports = function (dir, filter, callback){
    var fs = require('fs');
    fs.readdir(dir,function (err, data) {
	if(err) return callback(err);

	var data = data.filter(function (element) {
            return element.indexOf(('.'+filter).toString()) >=0; 
	})
	callback(null, data);
    })
} 
