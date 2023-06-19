// 정수 배열 numbers가 주어집니다.
//numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
//배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// numbers      result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

//채연
function solution(numbers) {
  const result = [];
  numbers.map((number, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      const sum = number + numbers[i];
      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  });

  return result.sort((a, b) => a - b);
}

//수지
function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  }
  return result.sort((a, b) => a - b);
}

// 정원
function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!isNaN(sum)) {
        result.push(sum);
      }
    }
  }
  return Array.from(new Set(result)).sort((a, b) => a - b);
}