var pessoa = {
  constructor: function(nome, idade){
    this.nome = nome;
    this.idade = idade;
  },
  toString: function(){
    return this.nome + " tem "+ this.idade + " anos";
  }
};

var funcionario = Object.create(pessoa);
funcionario.toString = function(){
  return pessoa.toString.call(this) + " e é funcionario";
};

var pessoa1 = Object.create(pessoa);
pessoa1.constructor("João", 20);


var pessoa2 = Object.create(funcionario);
pessoa2.constructor("Pedro", 16);


console.log(pessoa1.toString());
console.log(pessoa2.toString());
