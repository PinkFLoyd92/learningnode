if (process.argv.length <3) {
    console.log("faltan argumentos")
}

var numbers = process.argv.slice(2, process.argv.length)

if(numbers instanceof Error){
    console.log("error")
    process.exit()
}
var total = 0;
for(var i = 0; i < numbers.length; i++) {
    total += parseInt(numbers[i]); 
}
console.log(total)
