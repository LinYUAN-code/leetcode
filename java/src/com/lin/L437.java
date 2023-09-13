package src.com.lin;

import java.util.HashMap;
import java.util.Map;

public class L437 {
    public Map<Long,Integer> st = new HashMap<>();
    public int pathSum(TreeNode root, int targetSum) {
        if(root == null)return 0;
        int ans = (root.val == targetSum ? 1 : 0);
        st.merge((long)root.val, 1, (a,b) -> a+b);
        st.merge((long)0, 1, (a,b) -> a+b);
        ans += this.dfs(root.left, (long)root.val, targetSum);
        ans += this.dfs(root.right, (long)root.val, targetSum);
        st = new HashMap<>();
        return ans;
    }
    public int dfs(TreeNode node, long sum, int targetSum) {
        if(node == null) {
            return 0;
        }
        int ans = 0;
        sum += node.val;
        Integer o = st.get(sum - targetSum);
        if(o != null) {
            ans += o;
        }
        st.merge(sum, 1, (a,b) -> a+b);
        ans += this.dfs(node.left, sum, targetSum);
        ans += this.dfs(node.right, sum, targetSum);
        st.merge(sum, 1, (a,b) -> a-b);
        return ans;
    }
}
