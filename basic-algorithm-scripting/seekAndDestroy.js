function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  
  return arr.filter(function(elem) {
    return args.indexOf(elem) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
