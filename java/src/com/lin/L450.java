package src.com.lin;

public class L450 {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null)return null;
        if(root.val > key) {
            root.left = deleteNode(root.left, key);
            return root;
        }
        if(root.val < key) {
            root.right = deleteNode(root.right, key);
            return root;
        }
        if(root.val == key) {
            if(root.left == null && root.right == null) {
                return null;
            }
            if(root.right == null) {
                return root.left;
            }
            if(root.left == null) {
                return root.right;
            }
            TreeNode su = root.right;
            while(su.left != null) {
                su = su.left;
            }
            root.right = deleteNode(root.right, su.val);
            su.left = root.left;
            su.right = root.right;
            return su;
        }
        return root;
    }
    
}
