// Crie um objeto para armazenar informações de alunos, onde a 
// chave é o número de matrícula e o valor é o nome do aluno. 
// Adicione pelo menos 3 alunos ao dicionário e exiba os nomes 
// iterando sobre as chaves.

const alunos = {};

alunos[1] = "Lucas";
alunos[2] = "João da Silva";
alunos[3] = "Ana Maria";

for (const matricula in alunos) {
  console.log(`Aluno: Matrícula: ${matricula}; Nome: ${alunos[matricula]}`);
}