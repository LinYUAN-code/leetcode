/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let ans = [];
    const dfs = (node) => {
        if(!node)return ;
        dfs(node.left);
        dfs(node.right);
        ans.push(node.val);
    }
    dfs(root);
    return ans.join("$");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data)return null;
    let back = data.split("$").map(v=>{
        return parseInt(v);
    });
    let mid = back.slice(0).sort((a,b)=>{
        return a-b;
    });
    let n = mid.length;
    let index = n-1;
    let mp = {};
    for(let i=0;i<n;i++) {
        mp[mid[i]] = i;
    }
    const build = (l,r) => {
        if(l>r)return null;
        let node = new TreeNode(back[index]);
        let k = mp[back[index]];
        index--;
        node.right = build(k+1,r);
        node.left = build(l,k-1);
        return node;
    }
    return build(0,n-1);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */