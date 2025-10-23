// Simule uma fila de impressão onde diferentes documentos são adicionados à fila.
// Cada documento deve ter um nome e um tamanho em páginas.
// Ao processar a fila,
// exiba no console qual documento está sendo impresso e remova-o da fila após a "impressão".

// Desafio Extra:
// Limite a capacidade da fila (ex: 5 documentos) e exiba uma mensagem quando a fila estiver cheia.

const Impressora = require("./Impressora.js");

const impressora = new Impressora();

impressora.enqueue({ nome: "slides.pdf", paginas: 23 });
impressora.enqueue({ nome: "documentacao.docx", paginas: 20 });
impressora.enqueue({ nome: "apresentacao.pptx", paginas: 15 });
impressora.enqueue({ nome: "relatorio.pdf", paginas: 2 });
impressora.enqueue({ nome: "folha-pagamento.pdf", paginas: 1 });

impressora.enqueue({ nome: "boleto.pdf", paginas: 1 }); // A fila está lotada!
console.log(impressora.tamanho()); // 5

while (!impressora.estaVazia()) {
  impressora.dequeue();
}