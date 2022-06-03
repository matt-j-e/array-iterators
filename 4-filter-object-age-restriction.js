const profiles = [
  {name: "Alan", age: 34},
  {name: "Bernice", age: 7},
  {name: "Samantha", age: 15},
  {name: "Fernando", age: 56}
];

/**
 * TO DO
 * Using Array.filter() inside a functio -
 * create a new array that contains just those
 * people over the age passed into the function as
 * a parameter
 */

function ageRestricted(reqdAge) {
  return profiles.filter(person => {
    return person.age > reqdAge;
  });
};

console.log(ageRestricted(10));