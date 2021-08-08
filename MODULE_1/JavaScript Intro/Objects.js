// Methods -> any function defined in an object is known as Method of that object.

// To declare a object
// let obj = {};
// in object, key is also known as property
let person = {
    "Name" : "Sumit Dogra",
    Age : "21",
    Phone : "1234567890" ,
    0 : "Hello"
}
person["Company"] = "Facebook"; // way to add a key to a object
person["Git-Hub"] = "https://github.com/Sumitdogra3236"; // way to add a key to a object
person.gender = "Male";
// console.log(person[0]) // when there is numerical key, person.0 fails, must use []
// arr.1 -> dot property cannot be used on the number key
console.log(person)