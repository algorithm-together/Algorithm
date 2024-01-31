function solution(board)
{
    const r = board.length;
    const c = board[0].length;
    if(r < 2 || c < 2) return 1;
    const dx = [-1,-1,0];
    const dy = [0,-1,-1];
    let answer = 0;
    for(let i = 1; i<r; i++){
        for(let j = 1; j<c;j++){
            if(board[i][j]>0){
                let min = Number.MAX_SAFE_INTEGER;
                for(let k = 0; k<3; k++){
                    const nx = i+dx[k];
                    const ny = j+dy[k];
                    if(nx<0||nx>=r||ny<0||ny>=c) continue;
                    min = Math.min(min,board[nx][ny]);
                }
                if(min!=Number.MAX_SAFE_INTEGER) board[i][j] = min+1;
                answer = Math.max(answer,min+1);
            }
        }
    }
    return answer*answer;
}