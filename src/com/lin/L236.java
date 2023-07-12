package src.com.lin;

public class L236 {
    TreeNode ans;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        this.dfs(root, p, q);
        return ans;
    }
    int dfs(TreeNode node,TreeNode p,TreeNode q) {
        if(node == null)return 0;
        int flag = 0;
        if(node == p) {
            flag += 1;
        }
        if(node == q) {
            flag += 2;
        } 
        flag += dfs(node.left, p, q);
        if(flag < 0)return flag;
        flag += dfs(node.right, p, q);
        if(flag < 0)return flag;
        if(flag == 3) {
            ans = node;
            return -8;
        }
        return flag;
    }
}
