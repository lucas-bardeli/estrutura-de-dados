
// São usados para representar respostas de APIs
const apiResponse = {
  status: "success",
  data: {
    id: 1,
    nome: "Produto A",
    preco: 100
  }
};

console.log(apiResponse.data.nome); // Saída: Produto A

// Criando um dicionário com um objeto
const dicionario = {
  nome: "João",
  idade: 25,
  profissao: "Engenheiro"
};

console.log(dicionario.nome) // Saída: João
console.log(dicionario["idade"]) // Saída: 25

const dicionarioVazio = {};

// Adicionando chaves e valores
dicionarioVazio["cor"] = "Azul";
dicionarioVazio.tamanho = "Grande";

console.log(dicionarioVazio); // Saída: { cor: 'Azul', tamanho: 'Grande' }

// Removendo uma chave
delete dicionarioVazio["cor"];
console.log(dicionarioVazio); // Saída: { tamanho: 'Grande' }