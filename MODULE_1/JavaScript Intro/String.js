// .trim() -> remove the extra space from the front and the end
// .substr() -> return the substring, first arguement is starting index and the second arguement is the count of the numbers.
// str.substring() -> return the character from the starting index to the ending index-1
// slice() -> return a section of String
// .replace() -> replace the arguement in string
// .toUpperCase() -> convert the whole string into upper case
// .toLowerCase() -> convert the whole string into lower case
// .charAt() -> return the value at the index
// .charCodeAt() -> return the ascii value of the given index of a string

// Three ways to create a string

// let firstName = "Sumit";
// let lastName = 'Dogra';
// let age = 21;

// console.log(firstName + " " + lastName);

// let fullName = `${firstName} ${lastName}`;
// console.log(`my age is ${age}`);
// console.log('my age is ' + age);

// String methods

//length of string

// let str = "Sumit Dogra";
// console.log(str.length);

// console.log(str.slice(-1,-14));
// console.log(str.substring(2,6));

// console.log(str.substr(2,6));

// trim method

// let str = "              Sumit Dogra                        ";
// console.log(str.length);
// console.log(str.trim().length);

// replace method

// let str ="Sumit sumit dogra";
// console.log(str.replace("sumit","timus"));

// let str = "sumit dogra";
// console.log(str.toUpperCase());

// let str2 = "SUMIT DOGRA";
// console.log(str2.toLowerCase());

let str = "Sumit";
console.log(str.charAt(1));
console.log(str.charCodeAt(0));

// console.log(str[1]);

// str[0] = "A"; // strings are immutable
// console.log(str);
