
class ContaBancaria {
  #saldo = 0

  depositar(valor) {
    this.#saldo += valor
    console.log(`Você depositou R$ ${valor}`)
  }
  
  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor
      console.log(`Você sacou R$ ${valor}`)
    }
    else {
      console.log("Saldo insuficiente!")
    }
  }

  verSaldo() {
    console.log(`Você tem R$ ${this.#saldo} na conta.`)
  }
}

module.exports = ContaBancaria