
class ContaBancaria {
  _saldo = 0

  depositar(valor) {
    this._saldo += valor
    console.log(`Você depositou R$ ${valor}`)
  }
  
  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor
      console.log(`Você sacou R$ ${valor}`)
    }
    else {
      console.log("Saldo insuficiente!")
    }
  }

  verSaldo() {
    console.log(`Você tem R$ ${this._saldo} na conta.`)
  }
}

module.exports = ContaBancaria