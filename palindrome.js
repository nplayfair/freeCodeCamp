
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g, ""); // regexp to remove non alphamum
  var revStr = str.split("").reverse(); // create reversed string var
  if (revStr.join("") == str) { //join the reversed str and compare
  return true;
  }
  else
    return false;
}