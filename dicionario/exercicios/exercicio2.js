// Implemente uma função que receba uma string e retorne um 
// objeto onde as chaves são os caracteres e os valores, 
// o número de vezes que aparecem na string. Ignore os espaços.

// Se a função não receber nada por padrão deixa o texto como uma string vazia
function formatarString(texto = "") {
  const objeto = {};
  
  if (typeof texto !== "string") {
    console.log("O valor enviado não é uma string!");
    return {};
  }
  if (texto.length === 0) {
    console.log("A string está vazia!");
    return {};
  }

  // case-sensitive, maiúsculas são diferente de minúsculas
  // Se não quiser, use texto.toLowerCase() antes do .replace()
  const caracteres = texto.replace(/\s/g, "").split("");
  
  for (const caractere of caracteres) {
    objeto[caractere] = (objeto[caractere] || 0) + 1;
  }

  return objeto;
}

console.log(formatarString("Olá, Mundo!"));
console.log(formatarString("Abracadabra"));
// Testes
console.log(formatarString("")); // Enviando uma string vazia
console.log(formatarString(0)); // Enviando um número
console.log(formatarString()); // Enviando nada