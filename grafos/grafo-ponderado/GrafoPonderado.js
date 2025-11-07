
class GrafoPonderado {
  // Conjunto de vértices únicos
  #vertices = new Set();

  // Mapa onde cada vértice aponta para uma lista de objetos: { vertice, peso }
  #adjacencia = new Map();

  // Adiciona um novo vértice ao grafo. Se já existir, nada é feito.
  // Também inicializa sua lista de adjacência.
  adicionarVertice(v) {
    // Garante que o vértice está no conjunto
    this.#vertices.add(v);

    if (!this.#adjacencia.has(v)) {
      // Inicializa lista de vizinhos se ainda não existir
      this.#adjacencia.set(v, []);
    }
  }

  // Adiciona uma aresta ponderada entre dois vértices.
  // Crie os vértices caso ainda não existam. Por padrão, é um grafo direcionado.
  adicionarAresta(origem, destino, peso) {
    if (!this.#adjacencia.has(origem)) this.adicionarVertice(origem);
    if (!this.#adjacencia.has(origem)) this.adicionarVertice(destino);

    this.#adjacencia.get(origem).push({ vertice: destino, peso});

    // Se o grafo for não-direcionado, descomente a linha abaixo:
    // this.#adjacencia.get(origem).push({ vertice: destino, peso});
  }

  // Mostra a representação do grafo como lista de adjacência,
  // com os pesos visíveis.
  imprimirGrafo() {
    for (const [v, vizinhos] of this.#adjacencia.entries()) {
      const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(", ");
      console.table(`${v} -> ${lista}`);
    }
  }

  // Gera e imprime a matriz de adjacência do grafo.
  // Usa Infinity para representar a ausência de aresta.
  imprimirMatrizAdjacencia() {
    const vertices = Array.from(this.#vertices);
    const n = vertices.length;
    const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

    vertices.forEach((v, i) => {
      matriz[i][i] = 0; // distância para si mesmo = 0
      for (const vizinho of this.#adjacencia.get(v)) {
        const j = vertices.indexOf(vizinho.vertice);
        matriz[i][j] = vizinho.peso;
      }
    });

    console.log("Matriz de Adjacência (valores ♾️ representam ausência de aresta):");
    console.log("   ", vertices.join(", "));
    matriz.forEach((linha, i) => {
      console.log(vertices[i], linha.map(x => x === Infinity ? "♾️" : x).join("   "));
    });
  }
}

module.exports = GrafoPonderado;