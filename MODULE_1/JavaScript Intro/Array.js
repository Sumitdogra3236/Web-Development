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

let array = ["a", "b", "c", "d"];

function myforeach(array, callbackfn){
    for(let i in array){
        callbackfn(array[i], i, array);
    }
}

myforeach(array, function(value, idx, array){
    console.log(value, idx, array);
})