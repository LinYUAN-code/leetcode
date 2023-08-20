

package src.com.lin;

import java.util.Arrays;

/**
 * L213
 */
public class L213 {
    public int rob(int[] nums) {
        int n = nums.length;
        if(n <= 2) {
            return Arrays.stream(nums).max().orElse(-1);
        }
        return Math.max(robSequence(nums, 1, n), robSequence(nums, 0, n - 1));
    }
    public int robSequence(int[] nums,int l,int r) {
        int[][] f = new int[2][2];
        f[l % 2][1] = nums[l];
        for (int i = l + 1; i < r; i++) {
            int now = i % 2;
            int pre = (i - 1)%2;
            f[now][0] = Math.max(f[pre][0], f[pre][1]);
            f[now][1] = f[pre][0] + nums[i];
        }
        return Math.max(f[(r - 1) % 2][0], f[(r - 1) % 2][1]);
    }
}