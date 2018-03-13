function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strEnd = str.substr(str.length - target.length);
  if (strEnd == target) {
  	return true;
  }
  	else return false;
}