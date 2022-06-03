const names = ["Dale", "Harry", "Laura", "James", "Bobby"];

/**
 * TO DO
 * Using array.reduce()
 * Combine all of the names to a single string
 * with the names in the order they appear in the
 * array & no spaces
 */

// const combinedNames = names.reduce((combined, name) => {
//   return combined + name;
// });

const combinedNames = names.reduce((combined, name) => combined + name);

console.log(combinedNames);