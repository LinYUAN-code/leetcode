
package src.com.lin;

import java.util.Arrays;

/**
 * L16
 */
public class L16 {
    public int threeSumClosest(int[] nums, int target) {
        int ans = Integer.MAX_VALUE;
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i++) {
            int l = i + 1;
            int r = nums.length - 1;
            while(l < r) {
                if(l < r && Math.abs(ans - target) > Math.abs(nums[i] + nums[l] + nums[r] - target)) {
                    ans = nums[i] + nums[l] + nums[r];
                }
                if(l < r && nums[l] + nums[r] + nums[i] == target) {
                    break;
                }
                if(l < r && nums[l] + nums[r] + nums[i] < target) {
                    l++;
                } else if(l < r && nums[l] + nums[r] + nums[i] > target) {
                    r--;
                }
            }
        }
        return ans;
    }
}