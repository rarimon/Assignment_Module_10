// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a,b){
    return a-b;
}
let result=calculateDifference(50,20);
console.log(result);



// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(a){
    return a%2 !==0;
}
console.log(isOdd(11));
console.log(isOdd(10));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin (arr){
    let number=arr[0];

    for(let i=1;i<arr.length;i++){
         if(arr[i] < number){
             number=arr[i];
         }
    }
    return number;

}
const arr=[10,20,63,40,5];
let showresult =findMin(arr);
console.log("Smallest Number is ="+" "+showresult);


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(number){
       return number.filter(number => number%2 === 0);
}
let numbers=[1,20,63,40,53,22,44,21];
let shouNewArray=filterEvenNumbers(numbers);
console.log(shouNewArray);

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr){
   return  arr.sort((a, b) => a - b);
}

let array=[10,20,63,40,53,22,44,21];
let showShort=sortArrayDescending(array);
console.log(showShort);

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

