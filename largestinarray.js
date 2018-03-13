function largestOfFour(arr) {
  // You can do this!
  var largestArr = [];
  var largest = 0;
  // outer loop
  for (var i = 0; i < arr.length; i++) {
  	// inner loop
  	for (var j = 0; j < arr[i].length; j++) {
  		if (arr[i][j] > largest) {
  			largest = arr[i][j];
  		}
  	}
  	// add largest to new array
  	largestArr.push(largest);
  	largest = 0;
  }

  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);