function mutation(arr) {
  
  var words = arr.map(function(word) {
  	return word.toUpperCase();
  });

  for (var i = 0; i < arr[1].length; i++) {
  	if (words[0].indexOf(words[1][i]) == -1) {
  		return false;
  	}
  }
	return true;
}

mutation(["hello", "hey"]);