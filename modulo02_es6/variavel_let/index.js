// não é possível sobrescrever o let dentro de um mesmo escopo
let animal = "cat";
// let animal = "dog";
console.log(animal); // cat

{
  let animal = "dog";
  console.log(animal); // dog
}

console.log(animal); // cat
