// Simule uma fila de impressão onde diferentes documentos são adicionados à fila.
// Cada documento deve ter um nome e um tamanho em páginas.
// Ao processar a fila,
// exiba no console qual documento está sendo impresso e remova-o da fila após a "impressão".

// Desafio Extra:
// Limite a capacidade da fila (ex: 5 documentos) e exiba uma mensagem quando a fila estiver cheia.

const Documentos = require("./Documentos.js");

const documentos = new Documentos();

documentos.enqueue({ nome: "slides.pdf", paginas: 23 });
documentos.enqueue({ nome: "documentacao.docx", paginas: 20 });
documentos.enqueue({ nome: "apresentacao.pptx", paginas: 15 });
documentos.enqueue({ nome: "relatorio.pdf", paginas: 2 });
documentos.enqueue({ nome: "folha-pagamento.pdf", paginas: 1 });

documentos.enqueue({ nome: "boleto.pdf", paginas: 1 });