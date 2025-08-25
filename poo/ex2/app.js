
// Crie uma classe Carro em Carro.js com atributos modelo, ano e velocidade. 
// Implemente os métodos acelerar() (aumenta 10 km/h) e frear() (diminui 5 km/h). 
// No app.js, simule uma corrida de 3 acelerações e 1 freada.

const Carro = require("./Carro.js")

const carro = new Carro()

carro.modelo = "BMW Z4"
carro.ano = 2012

console.log(`O carro ${carro.modelo} ${carro.ano} está a ${carro.velocidade} km/h`)
carro.acelerar(10)
console.log(`O carro ${carro.modelo} ${carro.ano} está a ${carro.velocidade} km/h`)
carro.acelerar(10)
console.log(`O carro ${carro.modelo} ${carro.ano} está a ${carro.velocidade} km/h`)
carro.acelerar(10)
console.log(`O carro ${carro.modelo} ${carro.ano} está a ${carro.velocidade} km/h`)
carro.frear(5)
console.log(`O carro ${carro.modelo} ${carro.ano} está a ${carro.velocidade} km/h`)