console.log("IF");
var a = 10;
if(a == 10){
  console.log("AgileCode");
}else{
  console.log("JavaScript");
}

console.log();
console.log("FOR");
var items = ["Radio", "Shock", "Window"]
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log();
console.log("WHILE");
var items = ["Radio", "Shock", "Window"]
var a = 0;
while(a < items.length){
  console.log(items[a]);
  a++;
}

console.log();
console.log("FOR IN");
var pessoa = {nome: "John", idade: 20};
for(var p in pessoa){
  if(!pessoa.hasOwnProperty(p)) continue;
  console.log(p +" - "+ pessoa[p] );
}


console.log();
console.log("SWITCH");
var a = 10;
switch (a) {
  case 0:
    console.log("Bloco 0");
    break;
  case 1:
    console.log("Bloco 1");
    break;
  default:
    console.log("Bloco Invalido");
}
