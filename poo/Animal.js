
// Superclass
class Animal {
  constructor(nome) {
    this.nome = nome; // atributo
  }

  fazerSom() { // método genérico
    console.log("O animal faz um som...")
  }
}

// Subclasses
class Cachorro extends Animal {
  fazerSom() { // polimorfismo (sobrescrevendo o método)
    super.fazerSom() // O animal faz um som...
    console.log("Au au!")
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!")
  }
}

// Criando objetos
const cachorro = new Cachorro("Rex")
const gato = new Gato("Luna")

cachorro.fazerSom() // Au au!
gato.fazerSom() // Miau!