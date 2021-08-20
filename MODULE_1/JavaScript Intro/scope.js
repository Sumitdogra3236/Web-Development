// var has a functional / functioned scope
// let and var has block scope
// let is more secure then var, coz curly braces is smaller scope than functional scope.

// var is limited to functional scope and let is limited to block scope.
// No one knows var outside function scope, and no one knows let outside block scope.

// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);     // give error coz, a scope is limited to curly braces / block.



// {
//   var a = 10;
// }
// console.log(a); // will print a coz var has functional / functioned scope

function abc() {
  var a = 10;
}
console.log(a); // give error coz, var has a functional /functioned scope