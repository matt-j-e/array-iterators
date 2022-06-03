const names = ["Dale", "Laura", "James", "Bobby"];

/**
 * TO DO
 * Using Array.find()
 * return the first 5-letter name in the array
 */

const five = names.find(person => person.length === 5);

console.log(five);