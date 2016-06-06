// Hash Table
// Finish this implementation of a Hash Table. It should have the methods 
// insert(), retrieve(), and remove(). Your hash table need not resize itself, 
// but shall handle collisions.

var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    for(var i = 0; i < storage[index].length; i++) {
      if (storage[index][i].key === key) {
        storage[index][i].value = value;
        return;
      }
    }
    storage[index].push({key: key, value: value});
  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) return undefined;
    return storage[index].reduce((acc, tuple) => (tuple.key === key) ? tuple.value : acc, undefined);
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) return;
    storage[index].forEach((tuple, idx) => {
      if (tuple.key === key) {
        storage[index].splice(idx, 1);
      }
    });
  };
  
  return table;  
};  
var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
