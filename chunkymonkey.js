
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  var subGroup = [];

  for (var i = 0; i < arr.length; i++) {
  	if (i % size != (size -1)) {
  		subGroup.push(arr[i]);
  	}
  	else {
  		subGroup.push(arr[i]);
  		newArray.push(subGroup); // push to main array
  		subGroup = []; // reset subgroup
  	}
  }

  if (subGroup.length != 0) {
  	newArray.push(subGroup);
  }
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

