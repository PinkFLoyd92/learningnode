var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var properties = url.parse(req.url, true);
    var path = url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = properties.query.iso;
    if(req.url.search(/api\/parsetime/i)>=0){
        var data = new Date(date);
        res.end(JSON.stringify({"hour":data.getHours(),
                                "minute":data.getMinutes(),
                                "second":data.getSeconds()}));
    }
    else if(req.url.search(/\/api\/unixtime/i)>=0){
	var data = new Date(date);
	res.end(JSON.stringify({"unixtime":data.getTime()}));
    }
})

server.listen(process.argv[2]);
