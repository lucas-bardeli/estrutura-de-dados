
const Grafo = require("./Grafo.js");

const grafo = new Grafo();

grafo.adicionarVertice("Processador");
grafo.adicionarAresta("Processador", "Placa Mãe");
grafo.adicionarAresta("Processador", "Memória RAM");
grafo.adicionarAresta("Processador", "CPU Fan");

grafo.adicionarAresta("Placa Mãe", "Memória RAM");
grafo.adicionarAresta("Placa Mãe", "CPU Fan");
grafo.adicionarAresta("Placa Mãe", "SSD");
grafo.adicionarAresta("Placa Mãe", "Placa de Vídeo");
grafo.adicionarAresta("Placa Mãe", "Fonte");
grafo.adicionarAresta("Placa Mãe", "HD");

grafo.imprimirGrafo();

grafo.removerAresta("Placa Mãe", "HD");
grafo.removerVertice("HD");

console.log("------------------------------------------------------");
grafo.imprimirGrafo();