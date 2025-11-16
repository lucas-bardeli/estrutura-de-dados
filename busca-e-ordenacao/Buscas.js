
class Buscas {
  // Busca Sequencial
  static sequencial(array, valorProcurado) {
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === valorProcurado) {
        return i;
      }
    }

    return -1;
  }

  // Busca Binária (a lista precisa estar ordenada)
  static binaria(array, valorProcurado) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);

      if (array[meio] === valorProcurado) {
        return meio;
      }
      else if (array[meio] < valorProcurado) {
        inicio = meio + 1;
      }
      else {
        fim = meio - 1;
      }
    }

    return -1;
  }

  // Busca por Interpolação (os dados precisam estar ordenados e uniformemente distribuídos)
  static interpolacao(array, valorProcurado) {
    let inicio = 0;
    let fim = array.length - 1;

    while (
      inicio <= fim &&
      valorProcurado >= array[inicio] &&
      valorProcurado <= array[fim]
    ) {
      if (inicio === fim) {
        return array[inicio] === valorProcurado ? inicio : -1;
      }

      // Fórmula de interpolação linear
      const pos = inicio + Math.floor(
        ((valorProcurado - array[inicio]) * (fim - inicio)) /
        (array[fim] - array[inicio])
      );

      if (array[pos] === valorProcurado) {
        return pos;
      }
      else if (array[pos] < valorProcurado) {
        inicio = pos + 1;
      }
      else {
        fim = pos - 1;
      }
    }

    return -1;
  }
}

module.exports = Buscas;