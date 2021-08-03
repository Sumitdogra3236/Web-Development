// function add(a,b ){
//     return parseInt(a) + parseInt(b);
// }
  
// function add (a,b) {
//     if(isNaN(a) || isNaN(b)) {
//         return "Invalid arguments"
//     }
//     return parseInt(a) + parseInt(b);
// }


// let add = function(a,b){
//     return parseInt(a) + parseInt(b);
// }
// console.log(add("2",6));

// arrow function =>

// let add = (a,b) => {
//     return parseInt(a) + parseInt(b);
// }
// console.log(add(1,3));

// print();
// function print() {      // -> normal functions have high priority
//   // -> not give error, if called before decleration
//   console.log("hello");
//   return "hello";
//   return undefined; // -> by default return is, undefined
// }       


let print = function() {    // -> give error, if called before decleration
    console.log("hello");
}
// print();
console.log(print); 