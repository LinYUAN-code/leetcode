/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    // 进行层序遍历最方便的就是bfs
    // 如何实现顺序交替呢---只需要从后面弹出队列即可
    // 所以我们得要维护两个队列
    // 如果id 为0 那么加入顺序从左向右
    // 其实我们可以每次从头加入或者从尾加入--这样就可以只使用一个栈了
    const bfs = function() {
        let q = [];
        q[0] = [];
        q[1] = [];
        q[0].push(root);
        let ans = [];
        let id = 0;
        
        while(q[id].length) {
            let tmp = [];
            let j = (id+1)%2;
            while(q[id].length) {
                let u = q[id].pop();
                if(u===null)continue;
                tmp.push(u.val);
                if(!id) {
                    q[j].push(u.left);
                    q[j].push(u.right);
                } else {
                    q[j].push(u.right);
                    q[j].push(u.left);
                }
            }
            ans.push(tmp);
            id = (id+1)%2;
        }
        ans.pop();
        return ans;
    };
    return bfs();
};