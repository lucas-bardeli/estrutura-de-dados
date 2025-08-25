
const Funcionario = require("./Funcionario.js")

class Gerente extends Funcionario {
  calcularBonus() {
    return this.salario * 0.20
  }
}

module.exports = Gerente