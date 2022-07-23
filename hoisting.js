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

// let a=5
// console.log(a)
// {
//  let a=6
//  console.log(a)
//  {
//    let b=6
//    console.log(a)

//  }

// }
// console.log(a)

//CONS
//const cannot be redefine
//should be declared and defined at at time
//cannot be reinitialized

// var a=3;
// const a=5;
// console.log(a)

// let a=3;
// const a=5;
// console.log(a)

// const a=4
// console.log(a)
// { 
//      let a=6
//    console.log(a)
// }
// var b=5
// console.log(b)


// var a=4
// console.log(a)
// { 
//     const a=6
//    console.log(a)
// }
// // let b=5
// // console.log(b)




//NESTED
let a = 8;
// {
//   let a=0;
//   {
//     const a=9;
//     console.log(a)
//  }
//   console.log(a)

// }
// console.log(a)
 let a = 8
{  
    console.log(a)
    {
     console.log(a)
     let a = 9

    }
    console.log(a)

}
console.log(a)