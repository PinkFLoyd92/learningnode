var http = require('http');
var bl = require('bl');
var final_list = []
var finish = [false,false,false]
http.get(process.argv[2], function(response) {
    response.pipe(bl(function (err, data) {
        final_list.push({"data": data.toString(), "number": 1})
	finish[0] = true;
    }))
})

http.get(process.argv[3], function(response) {
    response.pipe(bl(function (err, data) {
        final_list.push({"data": data.toString(), "number": 2})
	finish[1] = true;
    }))
})

http.get(process.argv[4], function(response) {
    response.pipe(bl(function (err, data) {
        final_list.push({"data": data.toString(), "number": 3})
	finish[2] = true;
    }))
})

//while((finish[0] || finish[1] || finish[2]) ==false);
setTimeout(function () {
final_list.sort(function(a, b) {
    if(a["number"] > b["number"]) return 1;
    if(a["number"] < b["number"]) return -1;
    return 0;
})

for(var i = 0; i < final_list.length; i++) {
    console.log(final_list[i]["data"]);
}
    
}, 6000)



//respuesta
       
   //   function printResults () {  
   //     for (var i = 0; i < 3; i++)  
   //       console.log(results[i])  
   //   }  
       
   //   function httpGet (index) {  
   //     http.get(process.argv[2 + index], function (response) {  
   //       response.pipe(bl(function (err, data) {  
   //         if (err)  
   //           return console.error(err)  
       
   //         results[index] = data.toString()  
   //         count++  
       
   //         if (count == 3)  
   //           printResults()  
   //       }))  
   //     })  
   //   }  
       
   //   for (var i = 0; i < 3; i++)  
   //     httpGet(i)  
