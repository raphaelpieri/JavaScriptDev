//Funções fabricas
var criarPessoa = function(nome, idade){
  return {
    nome : nome,
    idade : idade
  };
};

console.log(criarPessoa("Raphael", 35));
console.log(criarPessoa("Kaue", 40));

//Função construtura
var Pessoa = function(nome, idade){
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa("Joana", 30));
console.log(new Pessoa("Rita", 50));


var pedro = {};
Pessoa.call(pedro, "Pedro", 20);

console.log(pedro);
