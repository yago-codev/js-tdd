function sayAnimal() {
  var animal = 'cat';
  console.log(animal);
}

sayAnimal();
console.log(animal); // não é possível acessar o conteúdo de animal porque ele está dentro do escopo da função
