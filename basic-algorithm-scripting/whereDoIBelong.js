function sortingCriteria(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  
  return 0;
}

function getIndexToIns(arr, num) {
  var result = arr;
  result.push(num);
  result.sort(sortingCriteria);
  return result.indexOf(num);
}

getIndexToIns([40, 60], 50);
