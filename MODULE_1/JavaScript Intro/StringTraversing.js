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
// let str = "Sumit Dogra";

// let revstr =  "";
// for(let i = str.length-1; i >= 0; i--){
//     revstr += str[i];
// }
// console.log(revstr)
// from ending

// let ans ="";
// let sp = undefined;
// let ep = revstr.length;

// for(let i = revstr.length - 1; i >= 0; i-- ){
//   if(revstr[i] == " "){
//       sp = i+1;
//       ans += revstr.substring(sp,ep) +" ";
//       ep = i;
//   }else if(i == 0){
//       sp = 0;
//       ans += revstr.substring(sp,ep);
//   }
// }

// console.log(ans);


//  from starting
// let 
// ans = "";
// let sp = 0;
// let ep = undefined;
// for(let i = 0; i <= revstr.length; i++){
//     if(revstr[i] == " "){
//         ep = i;
//         ans = " " + revstr.substring(sp,ep) + ans ;
//         sp = i+1;
//     }else if(i == revstr.length-1){
//         ep = revstr.length;
//         ans = revstr.substring(sp,ep) + ans;
//     }
// }
// console.log(ans);

// check the string is Palindromic or not.
// Method : 1
// let str = "aabaa";
// let revstr = "";
// for(let i = str.length-1; i >= 0; i--){
//     revstr += str[i];
// }

// if(str == revstr){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrome!");
// }


// Method : 2
let str = "aaaabaaaa";

let sp = 0;
let ep = str.length-1;
let ans = true;
// for(let sp = 0, ep = str.length-1; sp < ep; sp++, ep--){
//     if(str[sp] != str[ep]){
//         flag = 1;
//         console.log("Not Palindrome");
//         break;
//     }
// }
// if(flag == 0){
//     console.log("Palindrome");
// }

for(let  i = 0, j = str.length-1; i < j; i++, j--){
    if(str[i] != str[j]){
        ans = false;
        break;
    }
}

console.log(ans);
// using while loop
// while(sp < ep){
//     if(str[sp] != str[ep]){
//         console.log("Not Palindrome!");
//         flag = 1;
//         break;
 
//     }
//     sp++, ep--;
// }
// if(flag == 0){
//     console.log("Palindromic");
// }