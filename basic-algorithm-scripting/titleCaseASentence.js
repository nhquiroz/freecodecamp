function capitalizeFirstLetter(word) {
  var capitalLetter = word[0].toUpperCase();
  var remainingString = word.slice(1);
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
  var capitalizedList = [];
  var capitalizedText = "";
  capitalizedList = splitTextCapitalized(splitText);
  capitalizedText = capitalizedList.join(" ");

  return capitalizedText;
}

titleCase("I'm a little tea pot");
