	// TASK 1 - 2 //
// let arr = [];
// function getRandomArray(min, max, length) {
// 	for (i = 0; i < length; i++) {
// 		arr[i] = Math.round ((Math.random()) * (max - min) + min);
// 	}
// 	return arr;
// }

// console.log(getRandomArray(1, 50, +prompt()));

// function expandedArr(arr) {
// 	let newArr = [];

// 	for (i = 0; i < arr.length; i++) {

// 		let obj = {
// 			initial: arr[i],
// 			sqrt: Math.sqrt(arr[i]),
// 		}
// 		obj['sqrt rounded'] = obj['sqrt'].toFixed(2);

// 		if (Math.round(obj.sqrt) == Math.floor(obj.sqrt)) {
// 			obj.floor = true;
// 			obj.ceil = false;
// 		} else {
// 			obj.floor = false;
// 			obj.ceil = true;
// 		}
// 		newArr[i] = obj;
// 	}
// 	return newArr;
// }

// console.log(expandedArr(arr));

	// TASK 3 //
	
// function palindrome(str) {
// 	let strReverse = str.split('').reverse().join('');
// 	if (strReverse == str)
// 		return 'Палиндром';
// 	else return 'Не полиндром';
// }	

// console.log(palindrome(prompt()));