function reverseString(str) {
  var inputAsArray = str.split("");
  var reversedArray = inputAsArray.reverse();
  var joinedString = reversedArray.join("");

  return joinedString;
}

reverseString("hello");
