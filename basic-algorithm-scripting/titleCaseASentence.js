function capitalizeFirstLetter(word) {
  var capitalLetter = word[0].toUpperCase();
  var remainingString = word.substring(1, word.length);
  return capitalLetter + remainingString;
}

function splitTextCapitalized(splitText) {
  var capitalizedText = [];

  splitText.forEach(function(word) {
    word = word.toLowerCase();
    capitalizedText.push(capitalizeFirstLetter(word));
  });

  return capitalizedText;
}

function titleCase(str) {
  var splitText = str.split(" ");

  capitalizedText = splitTextCapitalized(splitText);
  capitalizedText = capitalizedText.join(" ");

  return capitalizedText;
}

titleCase("I'm a little tea pot");
