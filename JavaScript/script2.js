	

			// Task 1 //

	// function LessThan(a, b, c) {
	// 	if (a < b && a < c) {
	// 		return a;
	// 	} else if (b < a && b < c) {
	// 		return b;
	// 	} else {
	// 		return c;
	// 	}
	// }

	// console.log(LessThan(7,8,4));

			// Task 3 //

	// function factorial(x) {
	// 		if (x == 1) {
	// 			return x;
	// 		} else {
	// 			return factorial(x - 1) * x;
	// 		}
	// 	}

	// console.log(factorial(6));

		// Task 5 //
	

	// function roots(a, b, c) {
	// 	if (b ** 2 - 4 * a * c < 0) {
	// 		return console.log('Нет корней');
	// 	} else if (b ** 2 - 4 * a * c == 0 || a == 0) {
	// 		return console.log('Корень один');
	// 	} else {
	// 		return console.log('Два корня');
	// 	}
	// }

	// console.log(roots(4,4,0));


	function reverse(num, r = 0){
    if(!num) return r;
    r =  r * 10  + num % 10;
    return reverse(Math.floor( num / 10), r);
}
console.log(reverse(34556));