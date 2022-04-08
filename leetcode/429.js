/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root)return [];
    let ans = [];
    // bfs
    const bfs = () => {
        let q = [];
        q.push({
            node: root,
            d: 0,
        })
        while(q.length) {
            let u = q.shift();
            let node = u.node;
            if(typeof ans[u.d] === 'undefined')ans[u.d] = [];
            ans[u.d].push(node.val);
            for(let x of node.children) {
                q.push({
                    node: x,
                    d: u.d + 1
                });
            }
        }
    } 
    bfs();
    return ans;
};