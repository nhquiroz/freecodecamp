function rot13 (str) {
  var input = str.split('');
  var output = [];

  input.forEach(function (letter) {
    shiftCharIfItsInRange(letter, 65, 90, output);
  });

  return output.join('');
}

function shiftCharIfItsInRange (letter, lowerBound, upperBound, auxArr) {
  var charCode = letter.charCodeAt(0);

  if (charCode >= lowerBound && charCode <= upperBound) {
    var newCode = shift13(charCode);
    var newLetter = String.fromCharCode(newCode);
    auxArr.push(newLetter);
  } else {
    auxArr.push(letter);
  }
}

function shift13 (charCode) {
  var shifted13Char = charCode + 13;
  if (shifted13Char > 90) {
    // if ascii code > 90, you have to 'rotate' the char and start again
    charCode = 64 + shifted13Char - 90;
  } else {
    charCode += 13;
  }

  return charCode;
}
