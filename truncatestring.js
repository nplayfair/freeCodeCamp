
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  }
  if (num > 3) {
    return str.slice(0, (num - 3)) + "...";
  }
  else 
    return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);