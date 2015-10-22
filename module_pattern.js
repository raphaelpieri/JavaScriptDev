var counter = (function(){
  var _value = 0;

  var _add = function(){
    return ++value;
  };

  var _reset = function(){
    value = 0;
  };
  return {
    add: _add,
    reset: _reset
  };
})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

counter.reset();

console.log(counter.add());
console.log(counter.add());
