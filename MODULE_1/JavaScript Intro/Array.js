// new array creation
// let arr = []; // -> method 1
// let arr = new Array();

// pop() -> pops the element from the last of the array
// push() -> adds the element to the last of the array
// arr.length -> to get the length of the array, length is a Property
// .split(" ") -> [converts the string into Array], split the string by space and return an arrya of characters
// .join("") -> [convert the array to string], joins the array using the given parameter
// .concat() -> merge two arrays
// for in loop, for(let i in arr), i represent the indxes
// for of loop, for(let i of arr), of represent the value of indexes
// String.fromCharCode() -> converts the ascii to character
// arr.forEach(function(value, idx, Array) -> method implemented on array, which returns value, index and Array.
// arr.map(function(value, idx, Array){return ...})     -> .map() function returns a new array and set the value returned by the function on the idx
// arr.slice(si, ei) -> returns the elements from the array from si to ei-1, doesn't perform change in the original array
// arr.splice(si, how many numbers) -> returns as well as delete the elements from the array from si to number of elements, perform change in the original array.
// arr.filter(function(value, idx, arr)) -> if function return true, value will be added in new Array, if returns false value will not be added in new Array
// .includes() -> returns true or false, if array contain the number it return true otherwise it returns false

// console.log(arr.length);

// let arr = ["Sumit", 21, 79, 6.7];
// console.log(arr);

// // arr.pop();
// arr.push("Google Canada");
// console.log(arr.length);


// let str = "Java Script";
// console.log(str.split("")); 
// console.log(str.split(" "));

// let arr = ["a", "b", "c", "d"];
// console.log(arr.join(""));
// console.log(arr.join("@"));
// console.log(arr.join("#"));
// console.log(arr.join("$")); 

// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];
// console.log(arr1.concat(arr2));


// let arr = [5,6,7,8];
// traverse and get the indexes
// for(let i in arr){      // i represent the indexes
    // console.log(parseInt(i));
    // console.log(arr[i]);
// }

//traverse and get the value
// for(let i of arr){          // i represent the value of arr
//     console.log(i);
// }


// console.log("a" + 1 + 2);   // string concatenation 
// console.log("a" + (1 + 3));
// console.log(1 + 2 + "a");   // first integer addition then string concatenation

// for convert the character from the ascii
// console.log(String.fromCharCode("A".charCodeAt() + 1));


// Most Important Methods of Array

// const arr = [1, 2, 3, 6];   // redecleration is not allowed in const
// arr[2] = 34;    // -> allowed
// console.log(arr);
// arr = [4, 66, 3];   // -> not allowed
// console.log(arr);


// let arr = ["a", "b", "c", "d"];
//  for each loop
// arr.forEach(function(value, idx, Array){
// console.log(value, idx, Array);
// })

// let arr = ["a","b","c","d"];

// function temp (myarg,myarg2,myarg3) {
//     console.log(myarg,myarg2,myarg3);
// }
// arr.forEach(temp.bind(this, "Hello1", "Hello2", "Hello3"));

// self written for each function

// let array = ["a", "b", "c", "d"];

// function myforeach(array, callbackfn){
//     for(let i in array){
//         callbackfn(array[i], i, array);
//     }
// }

// myforeach(array, function(value, idx, array){
//     console.log(value, idx, array);
// })



//let arr =[1,2,3,4];     // add 2 in the each element of arr

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] + 2;
// }

// let newArr = arr.map(function(value){
//     return value+2;
// })
// console.log(newArr);


// let arr = [1,2,3,3,4,5,6];
// Sparsing an Array
// let tempArr = [...arr]; // Sparsing an Array(copy only the values of the array)
// console.log(arr.slice(1,3));    // slice() doesn't perform changes in original array
// console.log(arr.splice(1,2));   // perform change in original array
// console.log(arr);

// for(let i = arr.length-1; i >= 0; i--){    // delete odd elements from the array
//     if(arr[i] % 2 != 0){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);


// filter() method-> 

// arr = arr.filter(function(value){
    // if(value % 2 == 1){
    //     return false;   // if false -> no. is not kept in new array
    // } else{
    //     return true;    // if true -> no. is kept in new Array
    // }

//     return value % 2 == 0;
// })

// console.log(arr);


// Array.sort() method-> default method is not reliable in JS
// let arr = [20, 100];  -> default method fails in this array, 
// .sort() -> compares the value in string format
// let arr = [-1.11, 2, 34.3, 4, 5, 5.4];  // .sort() will not be applicable to this, use own function

// console.log(arr.sort(function(a,b){
//     // console.log(a,b);
//     if(a > b){
//         return 1;
//     }
//     else if(a == b){
//         return 0;
//     }
//     else {
//         return -1;
//     }
// }));

// .includes() -> returns true or false, if array contain the number it return true otherwise it returns false
// console.log(arr.includes(2));



