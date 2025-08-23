
// Crie uma classe base Animal em Animal.js com um método falar(). 
// Depois crie as subclasses Cachorro e Gato em arquivos separados (Cachorro.js, Gato.js) que sobrescrevem o método falar(). 
// No app.js, importe e teste.

const Cachorro = require("./Cachorro.js")
const Gato = require("./Gato.js")

const cachorro = new Cachorro()
const gato = new Gato()

cachorro.falar()
gato.falar()