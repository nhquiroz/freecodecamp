function sumAll (arr) {
  var lowerBound = getLowerBound(arr);
  var upperBound = getUpperBound(arr);
  var elementsSum = getElementsSum(arr);
  var allNumbersBetweenSum = getAllNumbersBetweenSum(lowerBound, upperBound);

  return elementsSum + allNumbersBetweenSum;
}

function getLowerBound (arr) {
  return arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
}

function getUpperBound (arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

function getElementsSum (arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

function getAllNumbersBetweenSum (lowerBound, upperBound) {
  var allNumbersBetweenSum = 0;

  for (var i = lowerBound + 1; i < upperBound; i++) {
    allNumbersBetweenSum += i;
  }

  return allNumbersBetweenSum;
}
