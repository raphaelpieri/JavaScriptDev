var soma = function soma(a, b){
  return a + b;
};

var produto = {nome: "Sapato", preco: 150};

var calcularPreco = function(produto, formulaImposto){
  return produto.preco + formulaImposto(produto.preco);
};

var formulaImpostoA = function(preco){return preco * 0.1; };
var formulaImpostoB = function(preco){return preco * 0.2; };


var valor = calcularPreco(produto, formulaImpostoA);

var helloWorld = function(){
  return function(){
    console.log("Hello World");
  };
};

var pessoa = {
  nome: "Joao",
  idade: 20,
  getIdade: function(){
    return this.idade;
  }
}

console.log(pessoa);
console.log(pessoa.getIdade());

var getLatir = function(palavra){
  console.log("AU AU AU" + palavra);
};

var cachorro = {
  nome: "Tina",
  getLatir: getLatir
};


console.log(cachorro.getLatir("Feijao"));
console.log(getLatir.call(cachorro, "Macarrao"));
console.log(getLatir.apply(cachorro, ["Naruto"]));
