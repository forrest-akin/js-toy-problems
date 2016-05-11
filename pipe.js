// Pipe
// Pipe composes a series of functions and returns the resulting function. Each 
// function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// recursive solution
var pipe = function(){
	var funcs = Array.from(arguments);
	var fun = funcs.pop();

	return function() {
	  var arg = Array.from(arguments)[0];
	  var recurse = (fun, arr) => {
	    if(arr.length > 0) 
	      return fun(recurse(arr.pop(), arr));
	    return fun(arg);
	  }
	  return recurse(fun, funcs);
	}
};

// reducing solution
var pipe = function(){
	var funcs = Array.from(arguments);
	return function() {
		return funcs.reduce((acc, fun) => {
			if(!acc) return fun.apply(null, Array.from(arguments));
			return fun(acc);
		}, null);
	}
}
