function rot13 (str) {
  var input = str.split('');
  var output = [];

  input.forEach(function (letter) {
    if (itsUppercase(letter)) {
      shiftLetter(letter, output);
    } else {
      output.push(letter);
    }
  });

  return output.join('');
}

function itsUppercase (letter) {
  return letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
}

function shiftLetter (letter, auxArr) {
  var charCode = letter.charCodeAt(0);
  var newCode = shift13(charCode);
  var newLetter = String.fromCharCode(newCode);
  auxArr.push(newLetter);
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
