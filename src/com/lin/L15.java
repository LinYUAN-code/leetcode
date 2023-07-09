package src.com.lin;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class L15 {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums);
        for(int i=0;i<nums.length - 2;i++) {
            if(nums[i] == (i-1>=0?nums[i-1]:Integer.MAX_VALUE)) {
                continue;
            }
            int l = i+1;
            int r = nums.length - 1;
            int value = -nums[i];
            while(l<r) {
                while(l < r && nums[l] == (l-1 == i ? Integer.MAX_VALUE : nums[l-1])) {
                    l++;
                }
                while(l < r && nums[l] + nums[r] < value) {
                    l++;
                }
                while(l < r && nums[l] + nums[r] > value) {
                    r--;
                }
                if(l < r && nums[l] + nums[r] == value) {
                    ans.add(new ArrayList<Integer>(Arrays.asList(nums[i],nums[l],nums[r])));
                    l++;
                }
            }
        }
        return ans;
    }
}
