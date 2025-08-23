
const Animal = require("./Animal.js")

class Gato extends Animal {
  falar() {
    console.log("Miau!")
  }
}

module.exports = Gato