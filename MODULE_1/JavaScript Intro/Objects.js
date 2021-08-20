// Methods -> any function defined in an object is known as Method of that object.
// Object.keys() ->  return array of keys of object
// Object.values(); // return array of values of object

// To declare a object
// let obj = {};
// in object, key is also known as property
// let person = {
//     "Name" : "Sumit Dogra",
//     Age : "21",
//     Phone : "1234567890" ,
//     0 : "Hello"
// }
// person["Company"] = "Facebook"; // way to add a key to a object
// person["Git-Hub"] = "https://github.com/Sumitdogra3236"; // way to add a key to a object
// person.gender = "Male";
// console.log(person[0]) // when there is numerical key, person.0 fails, must use []
// arr.1 -> dot property cannot be used on the number key, and variables
// console.log(person)

// Prototype
// console.log(Array.prototype);
// Array.prototype.name = "Sumit"; // name is the prototype of the array
// let arr = [1,2,3,4];
// console.log(arr.name);

// String.prototype.len = function() {
//     // console.log(this.length);
//     return(this.length);
// }

// let str = "Sumit Dogra";
// str.len();
// console.log(str.len())

// Nested Objects

// obj = {
//     obj1 : {
//         "name" : "Sumit",
//         hello : function(){
//             console.log("Hello from 'hello'");
//         }
//     }
// }
// console.log(obj.obj1.hello());



// Object.keys() funtion -> Traversing the object, returns array of keys
// Object.values() function -> Travesing the object, returns array of values
let obj = {
    1 : "Hello1",
    2 : "Hello2"
}

// console.log(Object.keys(obj)); // return array of keys of object
// console.log(Object.values(obj)); // return array of values of object

// for (let i of obj) -> of loop doesn't works on obj
// for (let i in obj) -> in loop works on obj, but returns only keys

// Traversing of Array

// for(let key in obj){
//     console.log(obj[key]);
// }

for(let i = 0; i < Object.keys(obj).length; i++){
    console.log(obj[Object.keys(obj)[i]]);
}