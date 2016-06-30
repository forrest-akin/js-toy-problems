// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

var isBalanced = (string) => {
    var closing = string.indexOf(')');
    var opening = string.indexOf('(');
    if(!~closing && !~opening) return true;
    if(!~closing || !~opening) return false;
    opening = string.slice(0, closing).lastIndexOf('(');
    if(!~opening) return false;
    return isBalanced(string.slice(0, opening) + string.slice(closing + 1));
}