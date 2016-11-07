function confirmEnding(str, target) {
  var end = str.length;
  var start = str.length - target.length;
  
  return str.substring(start, end) === target;
}

confirmEnding("Bastian", "n");
