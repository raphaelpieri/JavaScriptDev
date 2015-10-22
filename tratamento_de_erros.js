var illegalArgumentError = function(message){
  return{
    name: "illegalArgumentError",
    message: message
  }
}

var calculaDesconto = function(quantidade, valor){
  if(quantidade == 0) throw illegalArgumentError("Quantidade zero");
  if(valor <= 0 ) throw illegalArgumentError("Valor negativo");

  return (valor * quantidade) - 1;
}


try{
  console.log(calculaDesconto(45,0));
}catch(e){
  console.log(e.message);
}
