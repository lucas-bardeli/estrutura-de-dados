
const Animal = require("./Animal.js")

class Cachorro extends Animal {
  falar() {
    console.log("Au au!")
  }
}

module.exports = Cachorro