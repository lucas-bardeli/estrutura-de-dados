// Implemente uma função que converta um Object para um Map 
// e outra que faça o caminho inverso, convertendo um Map para um Object.

function objectParaMap(obj) {
  const mapa = new Map();

  for (const chave in obj) {
    mapa.set(chave, obj[chave]);
  }

  return mapa;
}

// Alternativa
// function objectParaMap(obj) {
//   return new Map(Object.entries(obj));
// }

function mapParaObject(mapa) {
  const obj = {};

  for (const [chave, valor] of mapa) {
    obj[chave] = valor;
  }

  return obj;
}

// Alternativa
// function mapParaObject(mapa) {
//   return Object.fromEntries(mapa);
// }

const aluno = {
  nome: "Lucas",
  idade: 19,
  curso: "D.S.M"
};

// Object → Map
const mapaAluno = objectParaMap(aluno);
console.log(mapaAluno);

// Map → Object
const objAluno = mapParaObject(mapaAluno);
console.log(objAluno);