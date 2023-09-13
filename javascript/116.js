/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    // 1.层序遍历
    // bfs实现层序遍历
    const bfs = function() {
        let q = [];
        q[0] = [];
        q[1] = [];
        let id = 0;
        if(root===null)return ;
        q[id].push(root);

        while(q[id].length) {
            let next = (id+1)%2;
            while(q[id].length) {
                let u = q[id].shift();
                if(q[id].length)u.next = q[id][0];
                if(u.left)q[next].push(u.left);
                if(u.right)q[next].push(u.right);
            }        
            id = next;
        }
    }
    bfs();
    return root;
};