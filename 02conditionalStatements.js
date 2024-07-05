/*
== Comments ==
Comments are the that part of the code compiler avoid to compile those line of code.
Basically we comment to improve readability and better undersatnding of code.
=== Operators in JS ===
Operator baically used to perform some operations on data.

--> Arithmetic operators :

ADD +, SUB -, MUL *, DIV / 
Modulus or %
Exponentiation or ^
Increment or ++
Decrement or --

--> Assignment Operators :

 = [Equal] is used to assign value to a variable.
 += [Plus Equal] is used to a = a+1
 -= [Minus Equal] is used to a = a-1
 *= [Multipy Equal] is used to a = a*1
 %= [modulus Equal] is used to a = a%1
 **= [Exponential Equal] is used to a = a**a

--> Comparison Operator :

Equal to ==
Equal to $ DataType ===
Not equal to !=
Not equal to & DataType !==
Greater than >
Greater than equal to >=
less than <
Less than equal to <=

--> Logical Operator

Logical AND &&
Logical OR ||
Logical NOT !

*/
console.log("Welcome to Chapter 2");
// This is a sample single line comment.
/*
It's an example 
of multiline 
comment in JavaScript 
*/



let a = 5;
let b = 2;
let c = a+b; //Third variable to store result
console.log("a + b = ", c);
console.log(a-b); //Subtraction 
console.log(a*b); //Multiplication
console.log(a/b); //Division
console.log(a**b); //Exponential of a,b
console.log(a=++a); //value of a beocmes 6
// Remember Unary Operator: a++ is Post Increment || ++a is Pre Increment || Similary a-- is Post Decrement and --a is Pre Increment.


//Comparison Operator

let m = 10;
let n = 2;
console.log("10 Not Equal 2", a!=b);
console.log("10 Equal to 2", m==n);

// Strictly Compare ===

name = "DEBASISH";

NAME = "debasish";

console.log(name===NAME);

// Logical Operators :
// AND both side must be true
let x = 6;
let y = 7;
let cond1 = x < y;
let cond2 = x === y;
console.log("Condition1 && Condition 2 = ", cond1 && cond2);

//OR any of one must be true
console.log("Condition1 || Condition 2 = ", cond1 || cond2);

//NOT produce the opposite result
console.log("Condition1 ! ", !cond1);

/* Conditional Statement */
//Day & Night Mode

let color;
let mode = "light"
if(mode === 'dark'){
    color = "Black";
}
if(mode === 'light'){
    color = "White";
}
console.log(color);

// Voting Constraint
let age = 15;
if (age >= 18){
    console.log("You Can Vote.");
}
if(age < 18){
    console.log("You Can not Vote.")
}

// We can make these code more concise like -->

let screenMode = "dark";
let screenColor;

if (screenMode == "dark"){
        screenColor = "Black Screen";
    }else{
        screenColor = "White Screen";
}
console.log(screenColor);

// Similary We can concise Voting Constraints aslo
// Remember else must be after an if statement means it dependent on if but if does'nt depent on else statement, means if can have or cannot have else part.

// Even ODD Checking using JavaScript

let num = 10;
if(num %2 === 0){
    console.log(num," is Even Number.");
}else{
    console.log(num," is ODD Number.");
}

// Let's explore else-if statement

let idCard = "Violet";
if(idCard == "Violet"){
    console.log("2nd Year Student.");
}else if(idCard == "Yellow"){
    console.log("1st Year Student.");
}else if(idCard == "White"){
    console.log("3rd Year Student.");
}else{
    console.log("It's a Visitor Card");
}

//Ternary operator : 
// Syntax --> condition ? true output : false output.
let userAge = 10;
userAge >= 18 ? 
console.log("adult") 
        :
console.log("Not adult");

// This is basically compact if else statement but try to avoid this for large sentence printing.


/*
=== Practice Questions from conditional Statement ===
Qs1. Get user to input a number using prompt("Enter a number:"). Then Check if the number is a multiple of 5 or not. 

Qs2. Write a code which can give grades to a student according to their score or marks.

*/

//let userInp = prompt("Enter a Number : ");
let userInp = 1255;
if(userInp%5 == 0){
    console.log(userInp, " is Multiple of 5 ");
}else{
    console.log(userInp, " is not Multiple of 5 ");
}

// let marks = prompt("Enter Your Marks : ");
let marks = 29;
if(marks >= 90 && marks <= 100){
    console.log("You Got A Grade");
}else if(marks >= 70 && marks <= 89){
    console.log("You Got B Grade");
}else if(marks >= 60 && marks <= 69){
    console.log("You Got C Grade");
}else if(marks >= 50 && marks <= 59){
    console.log("Somehow Passed");
}else if(marks >= 0 && marks <= 49){
    console.log("F : You Failed..!");
}else{
    console.log("Invalid Makrs");
}


// For more details visit --> developer.mozilla.org
// For Video Lecture visit --> dbport.netlify.app/resources

