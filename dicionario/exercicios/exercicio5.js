// Crie uma função que receba uma frase e use um Map para
// contar quantas vezes cada palavra aparece.

function contarPalavras(frase) {
  const mapa = new Map();

  if (typeof frase !== "string") {
    console.log("O valor enviado não é uma string!");
    return {};
  }
  if (frase.length === 0) {
    console.log("A string está vazia!");
    return {};
  }

  const palavras = frase.split(" ");
}

console.log(contarPalavras("Olá, Mundo!"));
console.log(contarPalavras("Eu só sei que eu nada sei"));
console.log(contarPalavras("A dona aranha subiu pela parede."));