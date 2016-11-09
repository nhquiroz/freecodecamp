function chunkArrayInGroups(arr, size) {
  var result = [];
  var i = 0;
  var n = arr.length;
  
  while(n - i > 0) {
    result.push(arr.slice(i, i + size));
    i += size;
  }
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
