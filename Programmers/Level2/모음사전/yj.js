function solution(word) {
    let v = ['A', 'E', 'I', 'O', 'U'];
    let cnt = 0;
    let w = "";
    for (let c1 of v) {
        w = c1;
        cnt++;
        if (w === word) return cnt;
        for (let c2 of v) {
            w = w.slice(0, 1) + c2;
            cnt++;
            if (w === word) return cnt;
            for (let c3 of v) {
                w = w.slice(0, 2) + c3;
                cnt++;
                if (w === word) return cnt;
                for (let c4 of v) {
                    w = w.slice(0, 3) + c4;
                    cnt++;
                    if (w === word) return cnt;
                    for (let c5 of v) {
                        w = w.slice(0, 4) + c5;
                        cnt++;
                        if (w === word) return cnt;
                    }
                }
            }
        }
    }
    var answer = 0;
    return answer;
}
