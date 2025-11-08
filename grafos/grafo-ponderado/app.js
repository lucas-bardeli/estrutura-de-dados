
const GrafoPonderado = require("./GrafoPonderado.js");

const grafoPonderado = new GrafoPonderado();

// Exemplo de uso:
grafoPonderado.adicionarAresta("A", "B", 2);
grafoPonderado.adicionarAresta("A", "C", 5);
grafoPonderado.adicionarAresta("B", "C", 1);
grafoPonderado.adicionarAresta("B", "D", 4);
grafoPonderado.adicionarAresta("C", "D", 2);

grafoPonderado.imprimirGrafo();
grafoPonderado.imprimirMatrizAdjacencia();

grafoPonderado.dfs("A");
grafoPonderado.bfs("A");
grafoPonderado.dijkstra("A");