
const Funcionario = require("./Funcionario.js")

class Desenvolvedor extends Funcionario {
  calcularBonus() {
    return this.salario * 0.15
  }
}

module.exports = Desenvolvedor