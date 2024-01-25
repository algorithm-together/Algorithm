let numSet = new Set();
function rec(depth,isSelected,now,numbers){
    numSet.add(Number(now));
    if(depth==numbers.length){
        return;
    }
    for(let i = 0; i<numbers.length; i++){
        if(isSelected[i]) continue;
        isSelected[i] = true;
        rec(depth+1,isSelected,now+numbers.charAt(i),numbers);
        isSelected[i] = false;
        rec(depth+1,isSelected,now,numbers);
    }
}
function isPrime(n){
    if(n<2) return false;
    for(let i = 2; i*i<=n;i++){
        if(n%i===0) return false;
    }
    return true;
}
function solution(numbers) {
    let cnt = 0;
    let isSelected = Array.from({length:numbers.length},()=>false);
    rec(0,isSelected,"0",numbers);
    for(let n of numSet){
        if(isPrime(n)) cnt++;
    }
    return cnt;
}
//17번째 줄에 i*i<n 이라고 써서 틀렸었음 꼭 i*i<=n 이라고 해야함에 주의!
