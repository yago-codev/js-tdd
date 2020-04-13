const idadeCorreta = 28;

// é possível reatribuir valores dentro de constantes quando estivermos trabalhando com objetos
const pessoa = {
  nome: "yago",
  idade: 60,
};

console.log(pessoa);

pessoa.idade = idadeCorreta;

console.log(pessoa);

// para tornarmos objetos imutáveis, poderemos utilizar o comando Object.freeze()
Object.freeze(pessoa);

pessoa.idade = 30; // não vai surtir efeito

console.log(pessoa); // 28
