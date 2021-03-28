// 1) Sum of an array
// Write a function that will take an array of numbers as a parameter and return the sum of those numbers.

// Examples:

// sum([3, 4, 5]); // returns 12

// sum([10, 5, 9]); // returns 24
const sum = (arrayOfNum) => {
  let sum = 0;
  for (let i = 0; i < arrayOfNum.length; i++) {
    sum += arrayOfNum[i];
  }
  return sum;
};
// console.log(sum([3, 4, 5]))

// Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results.

// 2) Average of an array
// Write code that takes an array of numbers as a parameter and returns the average of those numbers.

// Examples:

// average([3, 4, 5]); // returns 4

// average([10, 5, 9]); // returns 8

const findAvg = (arrayOfNum) => {
  let avg = sum(arrayOfNum) / arrayOfNum.length;
  return avg;
};

// console.log(findAvg([3, 4, 5]))

// Hint: calculating the average requires only one more step after finding the sum.

// Bonus 1: Refactor your code to re-use a function
// Now, rewrite your average function so it calls your sum function  to add the numbers up. This is an example of using a function to reuse code.

// See above

// Bonus 2:
// Write a function that takes an array of numbers and returns the largest number.

// Examples:

// max([7, 10, 30, 1]); // returns 30

const max = (arrayOfNum) => {
  let maxNum = arrayOfNum[0];
  for (let i = 1; i < arrayOfNum.length; i++) {
    if (arrayOfNum[i] > maxNum) {
      maxNum = arrayOfNum[i];
    }
  }
  return maxNum;
};

// console.log(max([7, 10, 30, 1]))

// Bonus 3:
// Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.

// Example:

// largestSum([3, 2, 8], [4, 9, 1]); // returns 17

const largestSum = (array1, array2) => {
  const max1 = max(array1);
  const max2 = max(array2);
  return max1 + max2;
};;

// console.log(largestSum([3, 2, 8], [4, 9, 1]))
