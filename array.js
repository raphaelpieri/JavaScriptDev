var carros = ["Ka", "Corsa", "Palio"];

console.log(carros.valueOf());

console.log(carros.toString());

console.log(carros.length);


carros.push("Gol");
console.log(carros);

carros.pop();
console.log(carros);

carros.unshift("Gol");
console.log(carros);

carros.shift();
console.log(carros);

console.log(carros.indexOf("Palio"));

carros.splice(1, 1);
console.log(carros);

var carros = ["Ka", "Palio", "Corsa"];
console.log(carros);

carros.splice(1,1,"Sonic");
console.log(carros);
