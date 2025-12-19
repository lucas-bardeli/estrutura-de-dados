// Use um Map para criar um contador de frequência de letras em uma string,
// diferenciando letras maiúsculas e minúsculas.

function contarLetras(texto) {
  const mapa = new Map();

  if (typeof texto !== "string" || texto.length === 0) {
    return mapa;
  }

  for (const caractere of texto) {
    if (caractere === " ") continue;

    if (!/[a-zA-ZÀ-ú]/.test(caractere)) continue;

    mapa.set(caractere, (mapa.get(caractere) || 0) + 1);
  }

  return mapa;
}

console.log(contarLetras("BAaBbbbA Ba"));
console.log(contarLetras("JavaScript"));
console.log(contarLetras("PHP"));