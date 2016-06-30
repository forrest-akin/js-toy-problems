// Function Bind
// Implement the function ‘bind’, which accepts a function and a context as 
// arguments. The context argument should override an existing context that the
// function is defined in. Your bind function should return the passed in 
// function.
// Once you have finished that, implement the function ‘bind’ as a method of 
// the Function.prototype object.

var bind = function(func, context){
  var context = context;
  var initialArgs = Array.from(arguments).slice(2);
  return function(){
    var args = Array.from(arguments);
    return func.apply(context, initialArgs.concat(args));
  }
};  

Function.prototype.bind = function(context) {
  var context = context;
  var originalFunc = this;
  var initialArgs = Array.from(arguments).slice(1);
  return function(){
    var args = Array.from(arguments);
    return originalFunc.apply(context, initialArgs.concat(args));
  }
};
