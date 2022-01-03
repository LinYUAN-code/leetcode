/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    // 正表示向右移动 负表示向左移动 。
    // 两个移动方向相同的行星不会发生爆炸---因为他们的移动速度相同...
    // 只有对向移动的行星才可能向撞--我们可以维护两个栈分别保存向右和向左的小行星
    let stk1 = [];
    let stk2 = [];
    for(let x of asteroids) {
        if(x < 0) { //向左移动
            // 首先看看有没有对向的行星
            x = -x;
            let flag = true;
            while(stk2.length) {
                let t = stk2.pop();
                if(t > x) { 
                    flag = false;
                    stk2.push(t);
                    break;
                } else if (t===x) {
                    flag = false;
                    break;
                }
            }
            if(flag)stk1.push(x);
        } else {
            stk2.push(x);
        }
    }
    // console.log(stk1,stk2);
    stk1 = stk1.map(v=>-v);
    return stk1.concat(stk2);
};