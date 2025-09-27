
const dicionario = { fruta: "Maçã" };

if ("fruta" in dicionario) {
  console.log("Chave encontrada!");
}
else {
  console.log("Chave não encontrada!");
}

const dados = { nome: "Carlos" };

if (!("idade" in dados)) {
  dados["idade"] = 28;
}

console.log(dados); // Saída: { nome: 'Carlos', idade: 28 }