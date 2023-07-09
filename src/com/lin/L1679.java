package src.com.lin;

import java.util.Arrays;

public class L1679 {
    public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int l = 0;
        int r = nums.length - 1;
        int ans = 0;
        while(l < r) {
            while(l < r && nums[l] + nums[r] < k) {
                l++;
            }
            while(l < r && nums[l] + nums[r] > k) {
                r--;
            }
            while(l < r && nums[l] + nums[r] == k) {
                l++;
                r--;
                ans++;
            }
        }
        return ans;
    }
}
