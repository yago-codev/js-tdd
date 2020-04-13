let firstName = "yago";
let surname = "milano";
let age = 28;

const person = {
  firstName: firstName,
  surname: surname,
  age: age,
  hello: function (firstName) {
    console.log(firstName);
  },
};

const personShortbandProperties = {
  firstName,
  surname,
  age,
  hello(firstname) {
    console.log(firstName);
  },
};

console.log(person);
console.log(personShortbandProperties);
personShortbandProperties.hello();
