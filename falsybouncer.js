function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var goodValues = arr.filter(Boolean); // use built in Boolean function
  return goodValues;
}

bouncer([7, "ate", "", false, 9]);