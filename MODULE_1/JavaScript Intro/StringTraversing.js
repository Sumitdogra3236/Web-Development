// .charAt() returns the character at the given index of the string
// .charCodeAt() method returns the ASCII value of the character
// parseInt() converts string numbers to integer
// process.stdout.write(); -> prints in a single line

// let str = "Sumit Dogra";

// for(let i = 0; i < str.length; i++){
//     // console.log(str.charCodeAt(i));
//     process.stdout.write(str[i]);
// }

// for(let i = 0; i < str.length; i++){
//     processI
// }

// let str = "lkajfebblfb bbb fbbb";    // find the no. of b
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     if(str[i] == 'b'){
//         count++;
//     }
// }
// console.log(count);

// let number = '12';
// console.log(number);
// console.log(parseInt(number)); //parseInt() converts string numbers to integer



// let str = "135535323210"; // return sum of all the number in the number string
// let sum = 0;
// // for(let i = 0; i < str.length; i++){
// //     sum += parseInt(str[i]);
// // }
// // console.log(sum);

// for(let i = 0; i < str.length; i+=2){
//     sum += parseInt(str.substr(i,2));
// }
// console.log(sum);


// let str = "1A2"; // return sum of all the number in the string
// let sum = 0;
// for(let i = 0; i < str.length; i++){
//     let char = str[i];
//     if(char >= 0 && char <= 9){     // if(str.charCodeAt(i) >= 47 && str.charCodeAt(i) <= 57)   // if(!isNaN(str.charAt(i)))
        
//     sum += parseInt(char);
//     }
//     else {
//         sum += str.charCodeAt(i);
//     }

// }
// console.log(sum);

// let str = "sumit dogra";
// let ans = "";
// for(let i = str.length-1; i >= 0; i--){
//     ans += str[i];
// }
// console.log(ans);

// word by word reverse
let strorg = "Sumit Dogra";
let str = "";
for(let i = strorg.length-1; i >= 0; i--){
    str += strorg[i];
}
// console.log(str);

// from ending
let sp = undefined;
let ep = str.length;

for(let i = str.length-1; i >= 0; i--){
   if(i == " " ){
       sp = i+1;
       ans += str.substring(sp,ep);
       ep = i;
   }else if(i == 0){
    sp = 0;   
    ans += str.substring(sp.ep);
   }
}

console.log(ans);

// check the string is Palindromic or not.

// let str1 = "naman";

// let sp1 = 0;
// let ep1 = str.length-1;

// while(sp1 < ep1){
//     if(str1[sp1] != str1[ep1] ){
//         console.log("Not Palindromic!");``
//         return;
//     }
//     sp1++;
//     ep1--;
// }

`