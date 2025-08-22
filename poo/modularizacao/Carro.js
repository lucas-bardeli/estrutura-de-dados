
class Carro {
  constructor(modelo, ano) {
    this.modelo = modelo
    this.ano = ano
  }

  acelerar() {
    console.log(`${this.modelo} ${this.ano} está acelerando...`)
  }
}

module.exports = Carro