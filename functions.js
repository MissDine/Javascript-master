sayHi()
function sayHi(name){
    console.log("Hello + name");
}
sayHi("Enid")
// The above function can be called before it has been initialized or defined  . This is called hoisting. Hoisting is possibe only in functions that have been declared using the function key word.
//The function below  cannot be called before it has been declared
const hiEnid = function (){
    console.log("Hi Enid");
}
hiEnid()