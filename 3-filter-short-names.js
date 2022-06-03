const allNames = ["Jenny", "Jasmin", "Dave", "Matt"];

/**
 * TO DO
 * Using Array.filter() 
 * create a new array that contains names less than
 * 5 characters long
 */

const shortNames = allNames.filter(name => name.length < 5);

console.log(shortNames);