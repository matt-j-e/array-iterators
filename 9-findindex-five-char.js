const names = ["Dale", "Harry", "Laura", "James", "Bobby"];

/**
 * TO DO
 * Using Array.findIndex()
 * return the Array index of the first 5-letter name in the array
 */

const fiveIndex = names.findIndex(name => name.length === 5);

console.log(fiveIndex);