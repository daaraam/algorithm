function solution(my_string) {
	let digitsOnly = my_string.replace(/[^0-9]/g, '');
	let digitArray = [...digitsOnly];

	let sum = 0;
	for (let i = 0; i < digitArray.length; i++) {
		sum += Number(digitArray[i]);
	}
	return sum;
}

// function solution(my_string) {
//     let digitsOnly = my_string.replace(/[^0-9]/g, '');
//     let digitArray = [...digitsOnly];
//     return digitArray.reduce((acc, cur) => acc + Number(cur), 0);
// }
