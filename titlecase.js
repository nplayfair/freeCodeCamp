
function titleCase(str) {
  var words = str.split(" ");
  var newWords = [];
  var capitalisedWord = "";
  for (var i = 0; i < words.length; i++) {
    capitalisedWord = words[i][0].toUpperCase();
    for (var j = 1; j < words[i].length; j++) {
      capitalisedWord += words[i][j].toLowerCase();
    }
    newWords.push(capitalisedWord);
    capitalisedWord = "";
  }
  return newWords.join(" ");
}

titleCase("I'm a little tea pot");