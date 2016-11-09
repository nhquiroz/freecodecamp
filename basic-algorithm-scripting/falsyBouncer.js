function isNotFalsy(value) {
  return Boolean(value);
}

function bouncer(arr) {
  var filteredArray = arr.filter(isNotFalsy);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
