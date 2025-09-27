
const dicionario = {
  nome: "João",
  idade: 25,
  cidade: "Rio de Janeiro"
};

// Obter todas as chaves
console.log(Object.keys(dicionario)); // Saída: ['nome', 'idade', 'cidade']

// Obter todos os valores
console.log(Object.values(dicionario)); // Saída: ['João', 25, 'Rio de Janeiro']

// Obter pares chave-valor
Object.entries(dicionario).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});