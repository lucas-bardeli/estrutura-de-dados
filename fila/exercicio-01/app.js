// Crie um sistema de atendimento onde clientes entram na fila e são atendidos na ordem de chegada.
// A cada iteração, um cliente deve ser removido da fila e exibido no console.
// Novos clientes podem ser adicionados aleatoriamente.

// Desafio Extra:
// Simule diferentes tempos de atendimento para cada cliente, usando setTimeout().

const Clientes = require("./Clientes.js");

const clientes = new Clientes();

clientes.enqueue(`Altair`);
console.log(`Um cliente entrou na fila!`);
clientes.enqueue(`Lucas`);
console.log(`Um cliente entrou na fila!`);
clientes.enqueue(`Pietro`);
console.log(`Um cliente entrou na fila!`);

const atenderCliente= () => {
  console.log(`${clientes.dequeue()} foi atendido!`)
}

setTimeout(atenderCliente, 5000);
setTimeout(atenderCliente, 3000);
setTimeout(atenderCliente, 2500);