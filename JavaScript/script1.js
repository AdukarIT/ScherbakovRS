
    //  TASK 1  //

// let foo = +prompt('Введите номер квартиры');
// switch (true) {
//     case foo >= 1 && foo <= 20:
//         console.log('Ваш подъезд №1');
//         break;
//     case foo >= 21 && foo <= 40:
//         console.log('Ваш подъезд №2');
//         break;
//     case foo >= 41 && foo <= 60:
//         console.log('Ваш подъезд №3');
//         break;
//     case foo >= 61 && foo <= 80:
//         console.log('Ваш подъезд №4');
//         break;
//     case foo >= 81 && foo <= 100:
//         console.log('Ваш подъезд №5');
//         break;
//     default:
//         console.log('Такой квартиры в доме нет!');
// }

    //  TASK 2  //

// let auto = prompt('Введите марку машины');
// switch (auto) {
//     case 'BMW':
//         console.log(auto + '-- страна происхождения Германия');
//         break;
//     case 'Ford': 
//         console.log(auto + '-- страна происхождения США');
//         break;
//     case 'Peugeot':
//         console.log(auto + '-- страна происхождения Франция');
//         break;
//     case 'Mazda':
//         console.log(auto + '-- страна происхождения Япония');
//         break;
//     case 'Mercedes':
//         console.log(auto + '-- страна происхождения Германия');
//         break;
//     case 'Volkswagen':
//         console.log(auto + '-- страна происхождения Германия');
//         break;
//     default: console.log(auto +'-- страна происхождения неизвестна');
// }

    //  TASK 3  //

// let year = +prompt('Введите год');
// if (year % 4 == 0) 
//     console.log('Этот год является високосным');
//     else 
//     console.log('Этот год не високосный')

    //  TASK 4  //

// let num = +prompt('Введите число от 1 до 20');
// let multi;
// let i = 1;
// if (num >= 1 && num <= 20) {
//     while (i <= 10) {
//         multi = num * i;
//         console.log(multi);
//         i++
//     }
// } else { 
//         console.log('Неверное число');
//     }

    //  TASK 5  //

// let sum = 0;
// for (i = 1; i <= 4; i++) {
//     if (i % 2 != 0) {
//         sum += i; 
//     } 
// }
// console.log(sum);

    // TASK 7  //

// let sharp = '';
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         (i + j) % 2 ? sharp += '#' : sharp += ' ';
//     }
//     sharp += '\n';
// }
// console.log(sharp);


	// TASK 6 ADDED //

	let a = 0;
	let b = 1; 
	let c;
	for (i = 0; i < 15; i++) {
	c = a + b; 
	a = b; 
	b = c; 
	console.log(c); 
	}

