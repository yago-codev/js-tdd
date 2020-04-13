function hello(name, surname) {
  name = name || "Yago";
  surname = surname || "Milano";

  console.log(`Hello ${name} ${surname}! How are you?`);
}

hello();

function helloES6(name = "Yago", surname = "Milano") {
  console.log(`Hello ${name} ${surname}! How are you?`);
}

helloES6();

helloES6("Outro nome");

helloES6("Outro nome", "Outro sobrenome");
