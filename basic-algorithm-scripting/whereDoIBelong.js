function sortingCriteria(a, b) {
  return a - b;
}

function getIndexToIns(arr, num) {
  var result = arr;
  result.push(num);
  result.sort(sortingCriteria);
  return result.indexOf(num);
}

getIndexToIns([40, 60], 50);
