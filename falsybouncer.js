function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function notFalsy(value) {
  	if (value !== false && value !== undefined && value !== null && 
  		value !== 0 && !(value.isNaN)) {
  		return value;
  	}
  }
  var goodValues = arr.filter(notFalsy);
  return goodValues;
}

bouncer([7, "ate", "", false, 9]);