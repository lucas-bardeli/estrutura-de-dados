// Crie uma função que receba um dicionário e remova todas as 
// chaves cujo valor seja null ou undefined.

function removerValores(dicionario) {
  for (const chave in dicionario) {
    if (dicionario[chave] === null || dicionario[chave] === undefined) {
      delete dicionario[chave];
    }
  }
  console.log("Valores nulos ou indefinidos removidos com sucesso!");
  return dicionario;
}

const alunos = {};

alunos[1] = "Lucas";
alunos[2] = "João da Silva";
alunos[3] = null;
alunos[4] = "Ana Maria";
alunos[5] = undefined;

console.log(removerValores(alunos));