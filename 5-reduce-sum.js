const numbers = [1,2,3,4,5,6];

/**
 * TO DO
 * Using Array.reduce() 
 * Sum the values in the array
 */

// const sum = numbers.reduce((acc, number) => {
//   return acc + number;
// });

const sum = numbers.reduce((acc, number) => acc + number);

console.log(sum);