
class Carrinho {
  constructor() {
    this.produtos = []
  }

  adicionarProduto(produto) {
    this.produtos.push(produto)
    console.log("Produto adicionado!")
  }

  total() {
    let total = 0

    for (let produto of this.produtos) {
      total += produto.preco
    }

    return total
  }
}

module.exports = Carrinho