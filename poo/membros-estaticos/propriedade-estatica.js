
class Pessoa {
  static especie = "Humano" // atributo estático

  constructor(nome) {
    this.nome = nome
  }

  apresentar() {
    console.log(`Olá, eu sou ${this.nome} e sou um ${Pessoa.especie}`)
  }
}

const p1 = new Pessoa("Ana")
p1.apresentar() // Olá, eu sou Ana e sou um Humano
console.log(Pessoa.especie) // Humano