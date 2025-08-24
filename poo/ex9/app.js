
// Crie classes Produto (com nome e preço) e Carrinho (com lista de produtos e método total()).
// Salve cada uma em arquivos separados.
// No app.js, crie produtos, adicione no carrinho e mostre o valor total.

const Carrinho = require("./Carrinho.js")
const Produto = require("./Produto.js")

const carrinho = new Carrinho()

carrinho.adicionarProduto(new Produto("Notebook", 2500))
carrinho.adicionarProduto(new Produto("Celular", 1700))
carrinho.adicionarProduto(new Produto("Tablet", 2100))

console.log(`O total da compra é: R$ ${carrinho.total()}`)