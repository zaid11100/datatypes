//comparison of var,let,const
//Hoisting
//var


// var a=3
// console.log(a)
// {
//     var a=4
//     console.log(a)
//     a=5
// }
// console.log(a)

//By default initialization is var
//var is global 
//Redeclaration is posssible
// Redefing is possible

//let
// //redifing is possible only in let
// let a=8;
// a=6;
// console.log(a)

// let a;
// let a=8;
// //error
// console.log(a)

// let a=3;
// console.log(a)
// {
//   a=5
//   console.log(a)
// }
//where global "a"is let and local "a" is var

// let a=3
// console.log(a)
// {
//  a=5
//  console.log(a)

// }
// console.log(a)
//error


// var a=3
// console.log(a)
// {
//  let a=5
//  console.log(a)
// }
// let b=6
// console.log(b)


// let a=9;
// {
// console.log(a)

// }


// let a=15
// {
//     console.log(a-5)
// }

let a;
a=0; //define
var a=3;//declare
var a=5;//redefine
console.log(a)