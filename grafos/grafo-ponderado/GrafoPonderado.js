
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
    if (!this.#adjacencia.has(destino)) this.adicionarVertice(destino);

    this.#adjacencia.get(origem).push({ vertice: destino, peso });

    // Se o grafo for não-direcionado, descomente a linha abaixo:
    // this.#adjacencia.get(origem).push({ vertice: destino, peso});
  }

  // Mostra a representação do grafo como lista de adjacência,
  // com os pesos visíveis.
  imprimirGrafo() {
    console.log('\x1b[35m%s\x1b[0m', "\nImprimindo o Grafo:");
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

    console.log('\x1b[34m%s\x1b[0m', "\nMatriz de Adjacência (valores ∞ representam ausência de aresta):");
    console.log("   ", vertices.join(" | "));
    matriz.forEach((linha, i) => {
      console.log(`${vertices[i]} | ${linha.map(x => x === Infinity ? "∞" : x).join(" | ")}`);
    });
  }

  // Busca em Profundidade (Deepth-First Search)
  // Visita o vértice inicial e seus vizinhos recursivamente até esgotar os caminhos.
  dfs(inicio) {
    const visitados = new Set();
    const resultado = [];

    const visitar = (v) => {
      visitados.add(v);
      resultado.push(v);

      for (const vizinho of this.#adjacencia.get(v) || []) {
        if (!visitados.has(vizinho.vertice)) {
          visitar(vizinho.vertice);
        }
      }
    };

    visitar(inicio);
    console.log('\x1b[32m%s\x1b[0m', "\nBusca em Profundidade:");
    console.log(`DFS: ${resultado.join(" -> ")}`);
  }

  // Busca em Largura (Breadth-First Search)
  // Explora primeiro os vizinhos mais próximos, usando uma fila.
  bfs(inicio) {
    const visitados = new Set();
    const fila = [inicio];
    const resultado = [];

    visitados.add(inicio);
    
    while (fila.length > 0) {
      const atual = fila.shift();
      resultado.push(atual);
      
      for (const vizinho of this.#adjacencia.get(atual) || []) {
        if (!visitados.has(vizinho.vertice)) {
          visitados.add(vizinho.vertice);
          fila.push(vizinho.vertice);
        }
      }
    }

    console.log('\x1b[31m%s\x1b[0m', "\nBusca em Largura:");
    console.log(`BFS: ${resultado.join(" -> ")}`);
  }

  // Algoritmo de Dijkstra para encontrar o caminho mais curto.
  // Calcula as menores distâncias entre o vértice inicial e todos os demais, com base nos pesos das arestas.
  dijkstra(inicio) {
    const distancias = {};
    const anteriores = {};
    const naoVisitados = new Set(this.#vertices);

    for (const v of this.#vertices) {
      distancias[v] = Infinity;
      anteriores[v] = null;
    }
    distancias[inicio] = 0;

    while (naoVisitados.size > 0) {
      // Encontra o vértice não visitado com a menor distância conhecida.
      const atual = [...naoVisitados].reduce((a, b) => distancias[a] < distancias[b] ? a : b );
      
      // Se o menor vértice tem distância infinita, o resto é inalcançável
      if (distancias[atual] === Infinity) break;
      
      naoVisitados.delete(atual);

      // Atualiza as distâncias para vizinhos.
      for (const vizinho of this.#adjacencia.get(atual) || []) {
        const alt = distancias[atual] + vizinho.peso;
        if (alt < distancias[vizinho.vertice]) {
          distancias[vizinho.vertice] = alt;
          anteriores[vizinho.vertice] = atual;
        }
      }
    }

    // Exibe o resultado
    console.log('\x1b[33m%s\x1b[0m', "\nAlgoritmo de Dijkstra:");
    console.log(`Menores distâncias a partir de ${inicio}:`);
    for (const v of this.#vertices) {
      console.log(`${v}: ${distancias[v]}`);
    }
  }
}

module.exports = GrafoPonderado;