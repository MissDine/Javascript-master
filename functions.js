sayHi()
function sayHi(name){
    console.log(`Hello`+name);
}
sayHi(" Israel")
// The above function can be called before it has been initialized or defined  . This is called hoisting. Hoisting is possibe only in functions that have been declared using the function key word.
//The function below  cannot be called before it has been declared
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



//Arrow function
const helloDine = names => names;
helloDine()
