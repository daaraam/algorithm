let age = 32;
function solution(age) {
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
	let answer = '';
	age = age.toString(); //"32"

	for (let i = 0; i < age.length; i++) {
		answer += alphabet[age[i]];
		//age[0]는 3이고 alphabet[3]이 됨. 그래서 d
		//age[1]은 2니까 alphabet[2]라서 c
	}
	return answer; // dc
}
console.log(solution(age));
