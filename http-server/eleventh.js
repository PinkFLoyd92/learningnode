var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    var data = fs.createReadStream(process.argv[3]);
    data.pipe(res);
})

server.listen(process.argv[2]);


//answer proposal.
     // var http = require('http')  
     // var fs = require('fs')  
       
     // var server = http.createServer(function (req, res) {  
     //   res.writeHead(200, { 'content-type': 'text/plain' })  
       
     //   fs.createReadStream(process.argv[3]).pipe(res)  
     // })  
       
     // server.listen(Number(process.argv[2]))  
   
