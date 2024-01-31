function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const bfs = (x, y) => {
    let queue = [];
    maps[x][y] = 2;
    queue.push([x, y]);
    while (queue.length > 0) {
      let [qx, qy] = queue.shift();
      let cur = maps[qx][qy];
      if (cur === 0) continue;
      for (let i = 0; i < 4; i++) {
        let nx = qx + dx[i];
        let ny = qy + dy[i];
        if (nx < 0 || n <= nx || ny < 0 || m <= ny) continue;
        if (maps[nx][ny] === 1) {
          queue.push([nx, ny]);
          maps[nx][ny] = cur + 1;
        }
        if (nx === n - 1 && ny === m - 1) {
          console.log(maps);
          return maps[n - 1][m - 1] - 1;
        }
      }
    }
    return -1;
  };
  return bfs(0, 0);
}
