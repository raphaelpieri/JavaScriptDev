var carros = [];
carros[0] = {modelo:"Gol", preco:20000};
carros[1] = {modelo:"HB20", preco:30000};
carros[2] = {modelo:"Focus", preco:50000};

console.log(carros);

var total = carros.reduce(function(prev, cur){
  return prev + cur.preco;
}, 0);
console.log(total);


var carros =["Gol", "HB20", "Vectra"];
var motos = ["Honda", "Yamaha"];

var veiculos = carros.concat(motos);

console.log(veiculos);

console.log(veiculos.slice(0,2));


console.log(veiculos.slice(4));

console.log(veiculos.reverse());

console.log(veiculos.reverse());

console.log(veiculos.join(";"));


var carros = [];
carros[0] = {modelo:"Gol", preco:20000};
carros[1] = {modelo:"HB20", preco:70000};
carros[2] = {modelo:"Focus", preco:50000};

console.log(carros);

var carroOrdenadoPorPreco = carros.sort(function(a, b){
  return a.preco - b.preco;
});

console.log(carroOrdenadoPorPreco);
