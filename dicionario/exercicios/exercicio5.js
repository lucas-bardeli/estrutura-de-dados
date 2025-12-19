// Crie uma função que receba uma frase e use um Map para
// contar quantas vezes cada palavra aparece.

function contarPalavras(frase) {
  const mapa = new Map();

  if (typeof frase !== "string" || frase.length === 0) {
    return mapa;
  }

  const palavras = frase.toLowerCase().replace(/[^\w\sÀ-ú]/g, "").trim().split(/\s+/);

  for (const palavra of palavras) {
    if (mapa.has(palavra)) {
      mapa.set(palavra, mapa.get(palavra) + 1);
    }
    else {
      mapa.set(palavra, 1);
    }
  }

  return mapa;
}

console.log(contarPalavras("O Rato roeu a roupa do Rei de Roma e o Rato fugiu"));
console.log(contarPalavras("Não é fácil, não é simples, mas não é impossível!"));
console.log(contarPalavras("A persistência leva ao sucesso e o sucesso exige persistência"));