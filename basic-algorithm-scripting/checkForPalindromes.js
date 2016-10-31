function palindrome(str) {
  function normalizeString(s) {
    return s.toLowerCase().replace(/\W|\s|_/g,"");
  }

  function reverseString(s) {
    return s.split("").reverse().join("");
  }

  var reversedString = normalizeString(reverseString(str));

  return (reversedString === normalizeString(str));
}

palindrome("_eye");
