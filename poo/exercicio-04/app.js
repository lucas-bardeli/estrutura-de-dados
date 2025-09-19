
// Crie uma classe ContaBancaria em ContaBancaria.js com atributo privado saldo (use convensão #saldo como privado).
// Implemente os métodos depositar(valor), sacar(valor) e verSaldo().
// No app.js, simule depósitos e saques.

const ContaBancaria = require("./ContaBancaria.js")

const conta = new ContaBancaria()

conta.depositar(100)
conta.verSaldo()

conta.sacar(50)
conta.sacar(20)
conta.sacar(30)

conta.verSaldo()
conta.sacar(40)