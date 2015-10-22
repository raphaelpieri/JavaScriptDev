console.log("1")
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.test(telefone));


// \Desconsidera proximo caracter
console.log("2")
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));

/*
Inicializando e finalizando com um determinado caracter
^ Inicia
$ Finaliza
*/

console.log("3")
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));


/*
Grupos de caracteres
[a,b,c] Aceita qualquer caracter nessa caso a, b, c
[^a,b,c] Não aceita qualquer caracter nessa caso a, b, c
[0-9] Aceita qualquer caracter entre 0 e 9
[^0-9] Não aceita qualquer caracter entre 0 e 9
*/
console.log("4")
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(80) 9459-1234";
console.log(regExp.test(telefone));

/*
Quantificadores  parte 2
{n} - numero especifico
{n, } - Numero minimo
{n,m} - Numero minimo e maximo
*/
console.log("5")
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(80) 9459-1234";
console.log(regExp.test(telefone));


console.log("6")
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone1 = "(80) 9459-1234";
console.log(regExp.test(telefone1));
var telefone2 = "(80) 89459-1234";
console.log(regExp.test(telefone2));


/*
Quantificadores parte 2
? - Zero ou um
* - Zero ou mais
+ - Um ou mais
*/
console.log("7")
var regExp = /^\([0-9]{2}\) [0-9]{4}-?[0-9]{4}$/;
var telefone = "(80) 9459-1234";
console.log(regExp.test(telefone));


console.log("8")
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(44) 9914-0366</td><td>(44) 99655206</td><td>(44) 9981-0366</td></tr></table>"
console.log(regExp.test(telefone));


console.log("9")
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4}-?\d{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(44) 9914-0366</td><td>(44) 99655206</td><td>(44) 9981-0366</td></tr></table>"
console.log(regExp.test(telefone));

console.log("10")
var regExp = /\(\d{2}\)\s\d{4}-?\d{4}/;
var telefone = "<table><tr><td>(44) 9914-0366</td><td>(44) 99655206</td><td>(44) 9981-0366</td></tr></table>"
console.log(telefone.match(regExp));


/*
Modificadores
i Case-insensitive matching
g Global matching
m Multiline matching
*/

console.log("11")
var regExp = /\(\d{2}\)\s\d{4}-?\d{4}/g;
var telefone = "<table><tr><td>(44) 9914-0366</td><td>(44) 99655206</td><td>(44) 9981-0366</td></tr></table>"
console.log(telefone.match(regExp));

console.log("12")
var regExp = /\(\d{2}\)\s\d{4}-?\d{4}/g;
var telefone = "<table><tr><td>(44) 9914-0366</td><td>(44) 99655206</td><td>(44) 9981-0366</td></tr></table>"
console.log(telefone.replace(regExp, "telefone"));
