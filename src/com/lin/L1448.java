package src.com.lin;

public class L1448 {
    public int goodNodes(TreeNode root) {
        if(root == null)return 0;
        int ans = 1;
        ans += this.dfs(root.left, root.val);
        ans += this.dfs(root.right, root.val);
        return ans;
    } 
    public int dfs(TreeNode node,int maxx) {
        if(node == null)return 0;
        int ans = 0;
        if(maxx <= node.val) {
            ans++;
            maxx = node.val;
        }
        ans += this.dfs(node.left, maxx);
        ans += this.dfs(node.right, maxx);
        return ans;
    }
}
