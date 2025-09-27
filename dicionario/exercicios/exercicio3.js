// Crie um objeto para armazenar informações de produtos de uma 
// loja. As chaves devem ser os códigos dos produtos, e os 
// valores, objetos contendo nome e preço. Itere sobre o dicionário 
// e exiba os produtos com preços acima de R$ 50.

const produtos = {
  "A1": {
    nome: "Sabonete",
    preco: 10
  },
  "B2": {
    nome: "Perfume",
    preco: 120
  },
  "C3": {
    nome: "Shampoo",
    preco: 75
  },
  "D4": {
    nome: "Hidratante",
    preco: 60
  },
  "E5": {
    nome: "Escova de Dentes",
    preco: 15
  }
};

for (const codigo in produtos) {
  if (produtos[codigo].preco > 50) {
    console.log(`Produto: Código: ${codigo}; Nome: ${produtos[codigo].nome}; Preço: ${produtos[codigo].preco}`);
  }
}