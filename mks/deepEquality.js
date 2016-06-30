// Deep Equality
// Write a function that, given two objects, returns whether or not the two are 
// deeply equivalent–meaning the structure of the two objects is the same, and 
// so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

var deepEquals = (a, b) => {
  let result = true;
  let _recurse = (_a, _b) => {
    if(Array.isArray(_a)) {
      if(!Array.isArray(_b)) {
        result = false;
        return;
      }
      _a.forEach((val, idx) => {
        if(typeof val === 'object') _recurse(val, _b[idx]);
        else
          if(val !== _b[idx]) result = false;
      });
    } else {
      if(Array.isArray(_b)) {
        result = false;
        return;
      }
      if(Object.keys(_a).length !== Object.keys(_b).length) {
        result = false;
        return;
      }
      for(var key in _a) {
        if(!(key in _b)) {
          result = false;
          return;
        }
        if(typeof _a[key] === 'object') _recurse(_a[key], _b[key]);
        else
          if(_a[key] !== _b[key]) result = false;
      }
    }
  }
  _recurse(a, b);
  return result;
};  
