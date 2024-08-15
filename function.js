//arrow functions

//function def using arrow
var add = (num1,num2) => num1 + num2;

var welcome = () => {
    return "welcome to js";
}

function power(num1, num2){
    return Math.pow(num1,num2);
}
//function call
var result = power(2,4);

console.log(add(5,6));
console.log(welcome);
console.log (result);