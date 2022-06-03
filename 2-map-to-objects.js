const names = ["Jenny", "Jasmin", "Dave", "Matt"];

/**
 * TO DO
 * Using Array.map() create a new array of objects with name
 * properties ie [{name: "Jenny"} ....]
 */

const tutorObjects = names.map(person => {
  return {name: person};
});

console.log(tutorObjects);