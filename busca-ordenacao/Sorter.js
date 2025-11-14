
class Sorter {

  /**
   * Bubble Sort
   */
  static bubbleSort(_array_) {
    const array = [..._array_]; // Cria uma cópia para não alterar o array original.
    let n = array.length;
    let ordenado;

    do {
      ordenado = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          ordenado = true;
        }
      }
      n--;
    } while (ordenado);

    return array;
  }

  /**
   * Quick Sort
   */
  static quickSort(array) {
    if (array.length <= 1) return array;

    const pivot = array[array.length - 1];
    const menores = [];
    const maiores = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        menores.push(array[i]);
      }
      else {
        maiores.push(array[i]);
      }
    }

    return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
  }
  
  /**
   * Merge Sort
   */
  static mergeSort(array) {
    if (array.length <= 1) return array;

    const meio = Math.floor(array.length / 2);
    const esquerda = Sorter.mergeSort(array.slice(0, meio));
    const direita = Sorter.mergeSort(array.slice(meio));

    return Sorter.merge(esquerda, direita);
  }

  static merge(esquerda, direita) {
    const resultado = [];
    let i = 0, j = 0;

    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] < direita[i]) {
        resultado.push(esquerda[i++]);
      }
      else {
        resultado.push(direita[j++]);
      }
    }

    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
  }
}

module.exports = Sorter;