package src.com.lin;

import java.util.ArrayList;

public class L1161 {
    ArrayList<Integer> ls = new ArrayList<>();
    public int maxLevelSum(TreeNode root) {
        dfs(root,0);
        int maxxi = 0;
        for(int i=1;i<ls.size();i++) {
            if(ls.get(i) > ls.get(maxxi)) {
                maxxi = i;
            }
        }
        return maxxi + 1;
    }
    void dfs(TreeNode node,int dep) {
        if(node == null)return ;
        while(ls.size() <= dep) {
            ls.add(0);
        }
        ls.set(dep, ls.get(dep) + node.val);
        dfs(node.left, dep + 1);
        dfs(node.right, dep + 1);
    }
}
