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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    /*
        *删除二叉树中的节点*
        1.首先找到这个节点
        2.如果是叶子节点那么直接删除
        3.如果只有左儿子或者只有右儿子-.-把儿子放上来
        4.如果又有左儿子又有右儿子
            找到被删除节点的后继节点--把后继节点放上来
            后继节点肯定是只有右子树的
            然后后继节点的右子节点（如果存在）直接放上去
    */
    let head = new TreeNode();
    head.val = 999999999;
    head.left = root;
    const find = (node,key) => {
        if(!node)return ;
        if(node.val===key)return node;
        if(key<node.val) return find(node.left,key);
        else return find(node.right,key);
    }
    const findNext = (node) => {
        let ne = node.right;
        while(ne.left) {
            ne = ne.left;
        }
        return ne;
    }
    const findFa = (node,tar) => {
        if(!node)return ;
        if(node.left == tar || node.right == tar)return node;
        if(node.val > tar.val)return findFa(node.left,tar);
        if(node.val < tar.val)return findFa(node.right,tar);
    }
    let tar = find(head,key);
    if(!tar)return head.left;
    let fa = findFa(head,tar);
    if(!tar.left && !tar.right) {
        if(fa.right === tar) fa.right = null;
        else fa.left = null;
    } else if(tar.left && tar.right) {
        let ne = findNext(tar);
        let f = findFa(head,ne);
        tar.val = ne.val;
        if(f===tar) {
            f.right = ne.right;
        } else {
            f.left = ne.right;
        }
    } else if(tar.left) {
        if(fa.right === tar) fa.right = tar.left;
        else fa.left = tar.left;
    } else if(tar.right) {
        if(fa.right === tar) fa.right = tar.right;
        else fa.left = tar.right;
    }
    return head.left;
};