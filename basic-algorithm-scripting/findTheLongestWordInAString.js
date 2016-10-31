function findLongestWord(str) {
  var listOfWords = str.split(" ");
  var descendingSortedList = listOfWords.sort(function(a, b) {
    // DESC -> b.length - a.length
    return b.length - a.length;
  });

  return descendingSortedList[0].length;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
