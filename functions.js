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

//Functions
const greetings = () => "Hey miss";
let resultOne = greetings();
console.log(resultOne);

//Methods
//THe only difference btwn method and functions is that methods are invoked using the dot notation eg name.toUpperCase() eg
let namee = "enid"
let resultTwo = namee.toUpperCase();
console.log(resultTwo);

//Callback functions-are functions that are passed in as arguments
const mine  = (value = () => 50)

console.log(value());

const destination = (city = () => "Nairobi")
console.log(city());

//forEach -Is a method that iterates over the array eg
majina = ["Moraa", "Marube", "Maosa", "Moma"]

majina.forEach(function (jina,age){
    console.log(jina, age = "You are 18!");
})

const loves = ["kind", "Goodness","Patience", "Understanding", "Honest","Humility"]
loves.forEach((love, description ) => console.log(description = "Love is ", love))


//Adding the index in the array

const love = ["kind", "Goodness","Patience", "Understanding", "Honest","Humility"]
love.forEach((love, index) => console.log(`${index} Love is ${love}`))

const ul =document.querySelector(".people")
const people = ["Enid", "Pauline", "Lilian", "Sharon"]
let html = ``;
people.forEach(function(person){
    html += `<li style = "color:Purple">${person}</>`
})
console.log(html);
ul.innerHTML = html

