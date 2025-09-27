
// Iterando sobre um dicionário
const dicionario = {
  fruta: "Maçã",
  cor: "Vermelho",
  preco: 5
};

// Usando "for...in"
for (const chave in dicionario) {
  console.log(`${chave}: ${dicionario[chave]}`);
}