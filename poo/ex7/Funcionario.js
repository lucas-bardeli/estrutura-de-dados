
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }

  calcularBonus() {
    return this.salario * 0.10
  }
}

module.exports = Funcionario