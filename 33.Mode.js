/* ✔ 문제 요약
정수 배열 array에서 최빈값을 return 하는 solution 함수를 완성하시오.
최빈값이 여러개면 -1을 return.

✔ 입출력 예

[1, 2, 3, 3, 3, 4]	3
[1, 1, 2, 2]	-1
[1]	1 */

function solution(array) {
	let newArray = new Array(Math.max(...array) + 1).fill(0);
	for (let i = 0; i < array.length; i++) {
		newArray[array[i]] += 1;
	}
	if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
		return -1;
	} else {
		return newArray.indexOf(Math.max(...newArray));
	}
}
