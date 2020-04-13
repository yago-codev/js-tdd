// chamando variável antes dela ter sido atribuída
// o JS irá fazer um hoisting, jogando a variável pra cima, incializando-a,
// mas apesar de a variável ter sido inicializada, o valor ainda não será atribuído.
// esse comportamento só acontece com a palavra reservada VAR
console.log(cat); // undefined
var cat = "meow";
