let text = "Lorem ipsum dolot sit amet";

// verificando se a variável text começa com as string que passaremos como parâmetro. vai retornar true ou false
// a função startWith recebe 2 parâmetros:
// - o primeiro é o conjunto de strings que iremos verificar dentro da variável,
// - o segundo parâmetro é a partir de qual caractere a busca será feita
console.log(text.startsWith("Lorem"));
console.log(text.startsWith("rem", 2));

// para verficarmos se um determinado texto existe no fim de uma string, utilizaremos a função endsWith()
console.log(text.endsWith("amet"));
console.log(text.endsWith("sit", 21));

// repetindo uma string
console.log("oi".repeat(10)); // vai repetir a string 'oi' 10 vezes

// para procurarmos uma string sem especificarmos a posição de caracteres,
// ou seja, se quisermos buscar dentro de uma frase a ocorrencia de uma determinada palavra,
// poderemos usar a função includes:
console.log("O rato roeu a roupa do rei de Roma".includes("rei"));
