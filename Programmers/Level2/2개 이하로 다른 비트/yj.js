function solution(numbers) {
  let answer = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let bin = number.toString(2);
      let binArray = bin.split("");
      binArray.unshift("0");
      for (let i = binArray.length - 1; i >= 0; i--) {
        if (binArray[i] === "0") {
          binArray[i] = "1";
          binArray[i + 1] = "0";
          bin = binArray.join("");
          break;
        }
      }
      answer.push(parseInt(bin, 2));
    }
  }
  return answer;
}
