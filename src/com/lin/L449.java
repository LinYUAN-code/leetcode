package src.com.lin;

import java.util.Arrays;

public class L449 {
        // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root == null) {
            return " -1";
        }
        StringBuilder sb = new StringBuilder();
        sb.append(" ")
            .append(root.val)
            .append(serialize(root.left))
            .append(serialize(root.right));
        return sb.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        int[] arr = Arrays.stream(data.split(" ")).filter(s -> s.length() > 0).mapToInt(Integer::valueOf).toArray();
        return build(arr);
    }
    private int u;
    public TreeNode build(int[] arr) {
        if(arr[u] == -1) {
            u++;
            return null;
        }
        TreeNode node = new TreeNode();
        node.val = arr[u];
        u++;
        node.left = build(arr);
        node.right = build(arr);
        return node;
    }
}
