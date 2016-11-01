function capitalizeFirstLetter(word) {
  var capitalLetter = word[0].toUpperCase();
  var remainingString = word.substring(1, word.length);
  return capitalLetter + remainingString;
}

function splitTextCapitalized(splitText) {
  splitText.forEach(function(word) {
    word = word.toLowerCase();
    capitalizedText.push(capitalizeFirstLetter(word));
  });
}

function titleCase(str) {
  var splitText = str.split(" ");
  var capitalizedText = [];

  var splitTextCapitalized = splitText.forEach(function(word) {
    word = word.toLowerCase();
    capitalizedText.push(capitalizeFirstLetter(word));
  });

  capitalizedText = capitalizedText.join(" ");
  return capitalizedText;
}

titleCase("I'm a little tea pot");
