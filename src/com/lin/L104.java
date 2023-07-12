package src.com.lin;

public class L104 {
    public int maxDepth(TreeNode root) {
        if(root == null)return 0;
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
