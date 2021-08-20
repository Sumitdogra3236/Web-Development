// var has a functional scope
// let and var has block scope
// let is more secure then var

// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);     // give error coz, a scope is limited to curly braces / block.



// {
//   var a = 10;
// }
// console.log(a); // will print a coz var has functional scope

function abc() {
  var a = 10;
}
console.log(a); // give error coz, var has a functional scope