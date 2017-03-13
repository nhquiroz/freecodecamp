function diffArray (arr1, arr2) {
  var newArr = [];

  pushUniqueArrayElements(arr1, arr2, newArr);
  pushUniqueArrayElements(arr2, arr1, newArr);

  return newArr;
}

function pushUniqueArrayElements (firstArray, secondArray, newArr) {
  firstArray.forEach(function (element) {
    if (!secondArray.includes(element)) {
      newArr.push(element);
    }
  });
}
