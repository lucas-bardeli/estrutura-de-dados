
class Grafo {
  #vertices = [];

  // Adiciona um novo vértice ao grafo
  adicionarVertice(vertice) {
    if (!this.#vertices[vertice]) {
      this.#vertices[vertice] = [];
    }
  }

  // Adiciona uma aresta entre dois vértices (não digirido)
  adicionarAresta(vertice1, vertice2) {
    if (!this.#vertices[vertice1]) {
      this.adicionarVertice(vertice1);
    }
    if (!this.#vertices[vertice2]) {
      this.adicionarVertice(vertice2);
    }

    this.#vertices[vertice1].push(vertice2);
    this.#vertices[vertice2].push(vertice1);
  }

  // Remove uma aresta entre dois vértices
  removerAresta(vertice1, vertice2) {
    this.#vertices[vertice1] = this.#vertices[vertice1].filter(v => v !== vertice2);
    this.#vertices[vertice2] = this.#vertices[vertice2].filter(v => v !== vertice1);
  }

  // Remove um vértice e suas conexões
  removerVertice(vertice) {
    while (this.#vertices[vertice]?.length) {
      const adjacente = this.#vertices[vertice].pop();
      this.removerAresta(vertice, adjacente);
    }
    delete this.#vertices[vertice];
  }

  // Exibe o grafo
  imprimirGrafo() {
    for (const vertice in this.#vertices) {
      console.log(`${vertice} -> ${this.#vertices[vertice].join(', ')}`);
    }
  }
}

module.exports = Grafo;