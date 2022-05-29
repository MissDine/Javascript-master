sayHi()
function sayHi(name){
    console.log(`Hello`+name);
}
sayHi(" Israel")
sayHi(" Mbogoo")
// The above function can be called before it has been initialized or defined  . This is called hoisting. Hoisting is possibe only in functions that have been declared using the function key word.
//The function below  cannot be called before it has been declared
//Hoisting is done in function declaration and not function expressions
//In javascript anythin that has an = is an expression.
const hiEnid = function (){
    console.log("Hi Enid");
}
hiEnid()
const doMath = function(number, number2){
    // console.log(number + number2)
    return number*number2
}
doMath(7,6)
let sixBySeven = doMath(6,7)



const speak = function(name = "Norbert", time = "Night"){
    console.log(`Good ${time} ${name}`);
}
speak()
speak("Enid","Night too")

const calArea = function(length, width){
    console.log(length* width)
    return(length*width)
    
}
calArea(8,9)

let area = calArea
area(7,5)

//Arrow functions
const circumference = (radius) => {
    return 3.14 * 2*radius
}
console.log(circumference(7))

const cirCumference = (diameter) => 3.14 *diameter;
console.log(cirCumference(28));

const greet = () => "Hey gal"
const result = greet();
console.log(result);

