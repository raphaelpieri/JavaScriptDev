var date = new Date();

console.log(date.getTime());

var natal = new Date("2014/12/25")
console.log(natal);


natal = new Date("12/25/2015");
console.log(natal);

natal = new Date("2014-12-25T10:30:00")
console.log(natal);

natal = new Date("2014-12-25T10:30:00-02:00")
console.log(natal);


natal = new Date(2014,11,25, 10, 30, 56)
console.log(natal);
console.log(natal.getYear());
console.log(natal.getFullYear());
console.log(natal.getMonth());
console.log(natal.getDay());
console.log(natal.getDate());
