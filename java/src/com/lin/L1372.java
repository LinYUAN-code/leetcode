package src.com.lin;


public class L1372 {
    public int longestZigZag(TreeNode root) {
        if(root == null)return 0;
        int ans[] = new int[1];
        dfs(root, ans);
        return ans[0] - 1;
    }
    public int[] dfs(TreeNode node, int ans[]) {
        if(node == null)return new int[]{0,0};
        int l[] = dfs(node.left,ans);
        int r[] = dfs(node.right,ans);
        int d[] =  new int[]{1 + l[1],1 + r[0]};
        ans[0] = Math.max(ans[0], Math.max(d[0], d[1]));
        return d;
    }
}
