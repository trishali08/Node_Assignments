var add = function(a,b){
  return 'The addition of '+a+' and '+b+' is: ' + ((+a) + (+b));
}

var sub = function(a,b){
    return 'The difference of '+a+' and '+b+' is: '+ (a-b);
}

var mul = function(a,b){
  return 'The product of '+a+' and '+b+' is: '+ (a*b);
}

var div = function(a,b){
  return 'The division of '+a+' and '+b+' is: '+ (a/b);
}

var mod = function(a,b) {
  return 'The remainder of '+a+' and '+b+' is: '+ (a%b);
}

module.exports = {
  add: add,
  sub: sub,
  mul: mul,
  div: div,
  mod: mod
}
