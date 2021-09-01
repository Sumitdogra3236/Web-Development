let arr = [1,2,3,4];

// for-each loop
arr.forEach(item => console.log(item));

// for-in loop
for(let item in arr){   // item gives the idexes of array
    console.log(item); // gives the indexes
    console.log(arr[item]); // gives the item in the indexes of the array
}

// for-of loop
for(let item of arr){  // gives the item of the array
    console.log(item);
}