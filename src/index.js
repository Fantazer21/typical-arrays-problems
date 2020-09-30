
exports.min = function min (array) {
if (array == undefined|| array.length === 0) {
	return 0;
}else { 
		var minimum = array[0]
		for (var i = 0; i <= array.length; i++) {
  		if (array[i] <= minimum) {
  		minimum = array[i];
}
}return minimum;
}
}



  

exports.max = function max (array) {
  if (array == undefined|| array.length === 0) {
return 0; 
}else { 
		var maximum = array[0]
		for (var i = 0; i <= array.length; i++) {
  		if (array[i] >= maximum) {
  		maximum = array[i];
}
}return maximum;
}
}



exports.avg = function avg (array) {
 if (array == undefined|| array.length === 0) {
return 0; 
} else {
  			var average  = 0;
  			var sum = 0; 
   		for (var i = 0; i < array.length; i++) {
   		sum += array[i];
   		} average = sum/(array.length);
  		 return average;
  }
}