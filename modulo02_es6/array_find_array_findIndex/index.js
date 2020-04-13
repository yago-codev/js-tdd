const data = [
  {
    name: "Yago",
    age: 28,
    city: "Porto Alegre",
  },
  {
    name: "Zé",
    age: 33,
    city: "Pato Branco",
  },
];

const sampleArray = [4, -5, 0];

const underZero = sampleArray.find((numero) => numero < 0); // retorna diretamente o número menor que 0
console.log(underZero); // -5

const underZeroIndex = sampleArray.findIndex((numero) => numero < 0); // retorna o índice do elemento que tiver o número menor que 0
console.log(underZeroIndex);

const findYago = data.find((objeto) => objeto.name === "Yago");
console.log(findYago);

const findZeIndex = data.findIndex((objeto) => objeto.name === "Zé");
console.log(findZeIndex);
