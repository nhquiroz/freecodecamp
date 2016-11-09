function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();
  var secondStringToArray = secondString.split("");
  var result = true;
  
  secondStringToArray.forEach(function(letter) {
    if (firstString.indexOf(letter) < 0) {
      result = false;
    }
  });
  
  return result;
}

mutation(["hello", "hey"]);
