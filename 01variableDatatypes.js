/*
Variables are container which contains some data in a specific memory location.
=== Naming Convention ===
1. Debasish & DEBASISH is not same it's case sensitive.
2. only letter, $ , _ etc are allowed but space does'nt allowed here.
3. _Name, $name is allowed but 123Name is not allowed.
4. Reserved keywords can't be used for varibales.

=== var let const ===

var : Variable can be re-declared & updated. A Global Scope Variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.

*/
// let keyword indicates that it's a variable.
let name = "Debasish Barman";

//var keyword also used to declair variable, it's the oldest convention.
var age =21;

//ES6 (echmaScript 6) comes with const keyword which is mostly used in JS.
const price = 99.99;
let a = null;
let isFollow = false;
let b = undefined;

// Remember const can't be changes but a variable declaired by let keyword can be changed further, but let does'nt support that.
//  If we want to declare a variable but don't want to initialize any value we need to use let , const can't support only declaration without assign value.
console.log(name);
console.log(price);
console.log(age);
console.log(a);
console.log(b);
console.log(isFollow);

//Block Scope Example
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}
// Here both a has different values as the blocks are different.

/*
DataType In JavaScript

=== Primitives : Number, String, Boolean, Undefined, Null, BigInt, Symbol===
=== Non-Primitives : Objects[key : value], array

*/
const student = {
    fullName : "Debasish Barman",
    CGPA : 9.4,
    age : 20,
    isPass : true,
};

console.log(student); //returns entire Objects
console.log(student["CGPA"]); //returns only CGPA vvalue
console.log(student["age"] + 20); // age got increase by 20




/* Practice Question */
/*
Qs1. Create a const object called 'product' to store information of a pen avl in flipkart.
Qss2. Create a const object called 'profile' to store information of instagram account.

*/

const product = {
    
    name : "Parker Pen",
    Rating : 4.5,
    DealOfTheDay : false,
    Offers : "30%off",
    Price : 200,
}; 
console.log(product);

const profile = {
    username : "@debasishbarman0011",
    followers : 530,
    following : 45,
    noOfPost : 74,
    bio : "Success is the small efforts each day..."
};
console.log(profile);
console.log(profile["followers"]); // check the followers count.

