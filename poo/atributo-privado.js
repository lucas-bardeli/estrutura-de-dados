
class ContaBancaria {
  #saldo = 0 // atributo privado

  depositar(valor) {
    this.#saldo += valor
  }

  verSaldo() {
    return this.#saldo
  }
}

const conta = new ContaBancaria()

conta.depositar(100)
console.log(conta.verSaldo()) // 100
// console.log(conta.#saldo) // Erro! Não pode acessar diretamente