function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;

  function bfs(start) {
    let visited = Array.from({ length: n + 1 }, () => false);
    let cnt = 1;
    let q = [start];
    visited[start] = true;
    while (q.length) {
      let node = q.shift();
      for (let nn of adj[node]) {
        if (visited[nn]) continue;
        visited[nn] = true;
        q.push(nn);
        cnt++;
      }
    }
    return cnt;
  }

  let adj = [];
  for (let i = 0; i < wires.length; i++) {
    let nWires = [...wires.slice(0, i), ...wires.slice(i + 1, wires.length)];
    adj = Array.from({ length: n + 1 }, () => new Array());
    for (let [a, b] of nWires) {
      adj[a].push(b);
      adj[b].push(a);
    }

    let left = bfs(wires[i][0]);
    let right = bfs(wires[i][1]);
    answer = Math.min(answer, Math.abs(left - right));
  }
  return answer;
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
//더 효율적인 방법으로 개선해야한다.