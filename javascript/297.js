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
    // 因为是二叉树---最简单的序列化方法就是使用堆的数组保存
    // 貌似对于不平衡的树有点浪费空间--但是日常使用我们可以先进行平衡操作 然后再序列化
    // 直接采用id++的方法来保存数据
    let data = [];
    let id = 0;
    // 先序遍历
    const encode = function(root) {
        if(!root) {
            data[id++] = null;
            return ;
        }
        data[id++] = root.val;
        encode(root.left);
        encode(root.right);
    }
    encode(root);
    return data.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    let id = 0;
    const decode = function() {
        const root = new TreeNode();
        root.val = data[id++];
        if(!root.val)return null;
        root.left = decode();
        root.right = decode();
        return root;
    }
    return decode();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */