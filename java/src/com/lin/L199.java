package src.com.lin;

import java.util.ArrayList;
import java.util.List;


public class L199 {
    ArrayList<int []> ans = new ArrayList<>();
    public List<Integer> rightSideView(TreeNode root) {
        if(root == null)return new ArrayList<>();
        dfs(root, 1);
        return ans.stream().mapToInt(arr -> arr[1]).boxed().toList();
    }
    void dfs(TreeNode node,int u) {
        if(node == null)return ;
        int base = 0;
        int k = u;
        while(k >= 2) {
            k /= 2;
            base++;
        }
        System.out.println(base + " " + ans.size());
        while(ans.size() <= base) {
            ans.add(new int[]{0, 0});
        }
        if(u > ans.get(base)[0]) {
            ans.set(base,new int[]{u, node.val});
        }
        dfs(node.right, u * 2 + 1);
        dfs(node.left, u * 2);
    }
}
