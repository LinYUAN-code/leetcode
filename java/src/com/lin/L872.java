package src.com.lin;

import java.util.ArrayList;
import java.util.List;

public class L872 {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> ls1 = new ArrayList<>();
        List<Integer> ls2 = new ArrayList<>();
        this.getLeafValue(root1, ls1);
        this.getLeafValue(root2, ls2);
        return ls1.equals(ls2);
    }
    public void getLeafValue(TreeNode node,List<Integer> ls) {
        if(node == null)return ;
        if(node.left == null && node.right == null) {
            ls.add(node.val);
            return ;
        }
        this.getLeafValue(node.left, ls);
        this.getLeafValue(node.right, ls);
    }   
}
