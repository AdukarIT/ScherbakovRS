		// TASK 1 //

function getRandomArray(len) {
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr[i] = Math.random();
	}
	return arr;
}

		// TASK 2 //

// function moreThanAverage() {
// 	let arr = getRandomArray(+prompt());
// 	console.log(arr);
// 	let average = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		average += arr[i];
// 	}
// 	average /= arr.length;
// 	console.log(average);
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > average)
// 			newArr.push(arr[i]);
// 	}
// 	console.log(newArr);
// }

// moreThanAverage();

		// Task 3 //

// function minimum() {
// 	let arr = getRandomArray(+prompt());
// 	console.log(arr);
// 	let min, next;
// 	if (arr[0] < arr[1]) {
// 		min = 0; next = 1;
// 	} else {
// 		min = 1; next = 0;
// 	}
// 	for (let i = 2; i < arr.length; i++) {
// 		if (arr[i] < arr[min]) {
// 			next = min;
// 			min = i;
// 		} else if (arr[i] < arr[next]) {
// 			next = i;
// 		}
// 	}

// 		console.log(arr[min], arr[next]);
// }

// minimum();

		// TASK 5 //     //NEW

// function sum() {
// 	let arr1 = getRandomArray(5);
// 	let arr2 = getRandomArray(5);
// 	let arr3 = [];
// 	console.log(arr1,'\n', arr2);
// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = arr2.length - 1- i; j >= 0; j--) {
// 			arr3[i] = arr1[i] + arr2[j];
// 			break;
// 		}
// 	}
// 	console.log(arr3);
// }

// sum();

		// TASK 6 // 	//NEW

// function bubble() {
// 	let arr = getRandomArray(+prompt());
// 	console.log(arr);
//   	for (let j = arr.length - 1; j > 0; j--) {
//     	for (let i = 0; i < j; i++) {
//       		if (arr[i] < arr[i + 1]) {
//         		let temp = arr[i];
//         		arr[i] = arr[i + 1];
//         		arr[i + 1] = temp;
//       		}
//     	}
//   	}
//   	console.log(arr);
// }

// bubble();

		// TASK 7 //	//NEW

// function task7() {
// 	let arr = getRandomArray(+prompt());
// 	console.log(arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] >= 0.999 && arr[i] + arr[j] <= 1.001)
// 				console.log(arr[i], arr[j])
// 		}
// 	}
// }

// task7();

		// TASK 9 // 	//NEW