// Compose
// Compose should return a function that is the composition of a list of 
// functions of arbitrary length. Each function is called on the return value 
// of the function that follows.

// You can think of compose as moving right to left through its arguments.

// recursive solutions
var compose = function(){
	var funcs = Array.from(arguments);
	var fun = funcs.shift();

	return function() {
	  var arg = Array.from(arguments)[0];
	  var recurse = (fun, arr) => {
	    if(arr.length > 0) 
	      return fun(recurse(arr.shift(), arr));
	    return fun(arg);
	  }
	  return recurse(fun, funcs);
	}
};

// reducing solutions
var compose = function(){
	var funcs = Array.from(arguments);
	return function() {
		return funcs.reduceRight((acc, fun) => {
			if(!acc) return fun.apply(null, Array.from(arguments));
			return fun(acc);
		}, null);
	}
}
