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

var pipe = function(){
	var funcs = Array.from(arguments);
	return function() {
		return funcs.reduce((acc, fun) => {
			if(!acc) return fun.apply(null, Array.from(arguments));
			return fun(acc);
		}, null);
	}
}