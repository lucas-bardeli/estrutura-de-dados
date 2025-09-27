
// No arquivo Veiculos.js, crie as classes Carro e Moto. Exporte ambas. 
// No app.js, importe as duas e crie objetos testando métodos.

const { Carro, Moto } = require("./Veiculo.js")

const carro = new Carro()
const moto = new Moto()

carro.acelerar()
moto.acelerar()