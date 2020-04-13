const ireland = {
  live: "Dublin",
  love: "Galway",
};

const text =
  "Eu moro em " + ireland.live + " e sou apaixonado por " + ireland.love + "!";

const textWithTemplateLiteral = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`;

const fruits = "banana" + "\n" + "orange" + "\n" + "apple";

const fruitsWithTemplateLiterals = `banana
orange
apple
`;

console.log(text);
console.log(textWithTemplateLiteral);
console.log(fruits);
console.log(fruitsWithTemplateLiterals);
