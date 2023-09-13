package src.com.lin;

import java.util.HashMap;
import java.util.Map;

public class L979 {
    Map<TreeNode, Integer> node_num = new HashMap<>();
    Map<TreeNode, Integer> val_num = new HashMap<>();
    int ans = 0;
    public int distributeCoins(TreeNode root) {
        // N <= 100
        // 一个很重要的抽象： 父节点给子节点负数个硬币
        // node_num , val_num => ans_i = Math.abs(node_num - val_num)
        dfs(root);
        return ans;
    }
    int[] dfs(TreeNode node) {
        if(node == null)return new int[]{0,0};
        int l[] = dfs(node.left);
        int r[] = dfs(node.right);
        ans += Math.abs(l[0] + r[0] + 1 - l[1] - r[1] - node.val);
        return new int[]{l[0] + r[0] + 1,l[1] + r[1] + node.val};
    }
}
