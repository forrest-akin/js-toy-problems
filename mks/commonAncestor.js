// Common Ancestor
// Implement the function getClosestCommonAncestor and getAncestorPath in the 
// Tree class

// // Valid Child
// var grandma = new Tree();
// var mom = new Tree();
// var uncle = new Tree();
// grandma.addChild(mom);
// grandma.addChild(uncle);
// var me = new Tree();
// mom.addChild(me);

// grandma.getAncestorPath(me); // => [grandma, mom, me]
// mom.getAncestorPath(me)  // => [mom, me]
// me.getAncestorPath(me) // => [me]
// grandma.getClosestCommonAncestor(me, uncle); // => grandma

// // Invalid Child
// grandma.getAncestorPath(H R Giger) // => null

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(a, b){
  let pathA = this.getAncestorPath(a);
  let pathB = this.getAncestorPath(b);
  if (!pathA || !pathB) return null;
  for (let i = pathA.length - 1; i > -1; i--)
    if (~pathB.indexOf(pathA[i])) return pathA[i];
  return null;
}

Tree.prototype.getAncestorPath = function(ancestor){
  const pathFinder = (node, path) => {
    let newPath = path.slice();
    newPath.push(node);
    if (node === ancestor) return newPath;
    for (let i = 0; i < node.children.length; i++) {
      let found = pathFinder(node.children[i], newPath);
      if (found) return found;
    }
    return null;
  }
  return pathFinder(this, []);
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};