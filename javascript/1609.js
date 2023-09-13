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
 * @return {boolean}
 */
 var isEvenOddTree = function(root) {

    const bfs = function() {
        let q = [];
        q[0] = [];
        q[1] = []; 
        let d = 1;
        q[d].push(root);
        d = 0;
        while(true) {
            d = (d+1)%2;
            if(!q[d].length)break;
            for(let i=0;i<q[d].length;i++) {
                if(q[d][i].val%2!==d)return false;
            }
            let pre = q[d][0].val;
            for(let i=1;i<q[d].length;i++) {
                if(d) {
                    if(pre>=q[d][i].val)return false;
                } else {
                    if(pre<=q[d][i].val)return false;
                }
                pre = q[d][i].val;
            }
            while(q[d].length) {
                let u = q[d].shift();
                let j = (d+1)%2;
                if(u.left)
                    q[j].push(u.left);
                if(u.right)
                    q[j].push(u.right);
            }
        }
        return true;
    }
    return bfs();
};