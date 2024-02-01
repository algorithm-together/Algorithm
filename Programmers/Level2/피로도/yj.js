let answer = 0;
let visited;
let globalDungeons;
function rec(k,depth){
    answer = Math.max(answer,depth);
    if(depth==globalDungeons.length){
        return;
    }
    for(let i = 0; i<globalDungeons.length; i++){
        if(!visited[i]&&k>=globalDungeons[i][0]){
             visited[i] = true;
             rec(k-globalDungeons[i][1],depth+1);
             visited[i] = false;
        }
    }
}
function solution(k, dungeons) {
    globalDungeons = dungeons;
    visited = Array.from({length:dungeons.length},()=>false);
    rec(k,0);
    return answer;
}
