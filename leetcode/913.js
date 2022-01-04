/**
 * @param {number[][]} graph
 * @return {number}
 */
 var catMouseGame = function(graph) {
    // 感觉挺复杂的题目
    // 不过范围仅有50
    // 平局：也就是遇到会一直重复的局面了
    // 感觉可以使用动态规划？
    // f[i][j][k] 为猫在i 鼠在j的时候 且进行了k轮操作 然后游戏的最终局面会是什么样子
    // 然后我们的答案就是 f[2][1][0]
    // 这里我们设定成 偶数轮 猫移动 奇数轮 鼠移动 其实反过来也没什么问题--每次移动我们都算两轮
    // 然后采用记忆化搜索的方式进行dp
    let n = graph.length;
    // 初始化--js初始化数组是真的麻烦
    let f = [];
    for(let i=0;i<n;i++)f[i] = [];
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++)f[i][j] = [];
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++)
            for(let k=0;k<2*n;k++)f[i][j][k] = -1;

    // 猫在i位置 鼠在j位置 进行了k轮
    const getState = function(i,j,k) {
        if(k>=2*n) {
            return 0;
        }
        if(f[i][j][k]>=0)return f[i][j][k];
        if(i===j)return 2;
        if(j===0)return 1;
        return calState(i,j,k);
    }
    const calState = function(x,y,k) {
        // 等于我枚举所有的状态
        // 状态怎么枚举呢？---两个人是轮流行动 谁先行动？老鼠 那么如果k是偶数那么老鼠行动
        // 然后整个行动过程采用最大最小思想
        // 比如当前如果是老鼠在行动 那么老鼠就会在所有的子局面里面挑选结局的次序为 1 0 2
        // 猫的话挑选次序为 2 0 1
        // 也就是尽可能挑选对自己最好的局面
        let result = -1;
        if(k%2===0){//老鼠移动
            result = 2;
            for(let i=0;i<graph[y].length;i++) {
                let ny = graph[y][i];
                let t = getState(x,ny,k+1);
                if(t===1) {
                    result = 1;
                    break;
                }
                if(result)result = t;
            }
        } else {//猫移动
            result = 1;
            for(let i=0;i<graph[x].length;i++) {
                let nx = graph[x][i];
                if(!nx)continue;//猫无法移动到洞中
                let t = getState(nx,y,k+1);
                if(t===2) {
                    result = 2;
                    break; 
                }
                if(result)result = t;
            }
        }
        return f[x][y][k] = result;
    }

    return getState(2,1,0);
};