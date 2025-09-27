
class Carro {
  modelo = ""
  ano = 0
  velocidade = 0

  acelerar(km_h) {
    this.velocidade += km_h
  }

  frear(km_h) {
    this.velocidade -= km_h
  }
}

module.exports = Carro