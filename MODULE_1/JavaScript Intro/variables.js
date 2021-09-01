// JavaScript is loosely typed language, any variable can have any data type

// let a = "abc";
// let b = 'a';
// let c = true;
// let d = 12;
// let e = 10.22;

// console.log(a,b,c,d,e); // Will be printed with spaces
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// redefine and reassignation in different variable types

// no redefination in let
// let a = 10;
// let a = 20;

// reassignation is allowed in let

// let a = 10;
// a = 20;
// console.log(a);

//both reAssign and reDefine is allowed in var

// var a = 10;
// var a = 20;
// console.log(a);

// var a = 10;
// a = 20;
// console.log(a);

// No reAssign and reDefine in const

// const a = 10;
// const a = 20;
// console.log(a);

// const a = 10;
// a = 20;
// console.log(a);


// Operators ->

// Unary

// post-fix operator
// var a = 2;
// console.log(a++); // -> 2
// console.log(a);  //-> 3

// pre-fix operator

// var a = 2;
// console.log(++a); // -> 3
// console.log(a); // -> 3

// Shift Operator -> shift the bits
// 00000...0001000  -> before shifting
// 00000...0100000  -> after shifting 2 bits from left

var num1 = 8, n = 2;
// left-shift
console.log(num1 << n) // -> 32 -> equivalent to 8*4 = 32 

// right-shift
// 00000....0001000 -> before shifting

