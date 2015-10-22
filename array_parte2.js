var carros = ["Gol", "Vectra", "Opala"];

console.log(carros);

carros.splice(1,0, "HB20");
console.log(carros);

carros.forEach(function(elemento){
  console.log(elemento);
});


for(var i = 0; i < carros.length; i++){
  console.log(carros[i]);
}

console.log();
console.log();

var carros = [];
carros[0] = {modelo:"Gol", marca:"VW"};
carros[1] = {modelo:"Fiesta", marca:"Ford"};
carros[2] = {modelo:"Astra", marca:"Chevrolet"};
console.log(carros);

console.log();
var carrosFord = carros.filter(function(elemento){
  return elemento.marca == "Ford";
});
console.log(carrosFord);

console.log();
var todosOsCarrosFord = carros.every(function(elemento){
  return elemento.marca == "Ford";
});
console.log(todosOsCarrosFord);

console.log();
var temAlgumFord = carros.some(function(elemento){
  return elemento.marca == "Ford";
});
console.log(temAlgumFord);

var carrosNovoArrayComMap = carros.map(function(elemento){
  return elemento.marca;
});

console.log(carrosNovoArrayComMap);


var carrosTamanhoNome = carros.map(function(elemento){
  return elemento.modelo.length;
});
console.log(carrosTamanhoNome);
