let fs = require('fs');

fs.readFile('advant.txt', (err, data) =>{
    if(err) throw err;

let flight=0;
let array = data.toString().split('');
// console.log(array)

let i=0;
let len= array.length +1;
for (; i<len;i++){
if(flight==-1){
    console.log("santa entered the basement")
    console.log(i)
}
if (array[i]==='('){
flight++;
}
else if(array[i]===')'){
    flight--;
}
else{
    console.log(flight)
}

} 


});