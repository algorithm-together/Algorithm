function solution(numbers){
  const answer = [];
  let nums = numbers.split("");

  const isPrime = (num) =>{
    if(num<=1) return false;
    for(let i=2; i<Math.sqrt(num); i++){
      if(num%i == 0) return false;
    }
    return true;
  }

  const per = (arr, fixed) => {
    if(arr.length >= 1){
      for(let i=0; i<arr.length; i++){
        const num = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if(!answer.includes(+num) && isPrime(+num)){
          answer.push(+num);
        }
        per(copyArr, num);
      }
    }
  }

  per(nums, '');
  return answer.length;
}