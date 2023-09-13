/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
 var eatenApples = function(apples, days) {
    // 那肯定是要先吃最先腐烂的苹果咯---优先队列搞起
    // 队列里面保存
    let q = new MinPriorityQueue({priority: (a) => a.day});

    let ans = 0;
    for(let i=1;i<=40005;i++) {
        if(i>apples.length && !q.size())break;
        if(i<=apples.length) {
            if(apples[i-1]) {
                q.enqueue({
                    day: i+days[i-1],
                    num: apples[i-1],
                })
            }
        }
        while(i && true && q.size()) {
            let t = q.dequeue();
            if(t.element.day <= i)continue;
            t.element.num--;
            ans++;
            if(t.element.num)q.enqueue(t.element);
            break;
        }
    }
    return ans;
};