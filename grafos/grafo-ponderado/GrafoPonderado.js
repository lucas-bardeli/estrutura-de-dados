
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

  imprimirGrafo() {
    for (const [v, vizinhos] of this.#adjacencia.entries()) {
      const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(", ");
      console.table(`${v} -> ${lista}`);
    }
  }
}

module.exports = GrafoPonderado;