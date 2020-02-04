


		// TASK 8 //
		function getMonth(month) {
			switch (month) {
				case 1:
				case 2:
				case 12:
					return 'Зима';
				case 3:
				case 4:
				case 5:
					return 'Весна';
				case 6:
				case 7:
				case 8:
					return 'Лето';
				case 9:
				case 10:
				case 11:
					return 'Осень';
				default: return 'Такого месяца нет';
			}
		}
		console.log(getMonth(+prompt()));





		// TASK 9 //

		// function seven() {
		// 	for (let i = 99; i >= 10; i--) {
		// 		if (i % 10 == 7 || i % 7 == 0) 
		// 			console.log(i);
		// 	}
		// }

		// console.log(seven());


		// TASK 10 //

	// function dividers(num) {
	// 	if (num >= 2 && num <= 20) {
	// 		for ( let i = 0; i <= num; i++) 
	// 			if (num % i == 0) 
	// 				console.log(i);
	// 	} else return 'Число не подходит';	
	// }

	// console.log(dividers(+prompt()));



		// TASK 15 //

// function words(num) {
// 	if (num % 100 >= 11 && num % 100 <= 14)
// 		return num + ' карандашей';
// 	else if (num % 10 >= 2 && num % 10 <= 4)
// 		return num + ' карандаша';
// 	else if (num % 10 == 1) 
// 		return num + ' карандаш';
// 	else return num + ' карандашей';
// }

// console.log(words(+prompt()));