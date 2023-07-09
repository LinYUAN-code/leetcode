package src.com.lin;

public class L1493 {
    public int longestSubarray(int[] nums) {
        int num = 0;
        int l = 0;
        int ans = 0;
        for(int r=0;r<nums.length;r++) {
            num += 1 ^ nums[r];
            while(l <= r && num > 1) {
                if(nums[l] == 0) {
                    num--;
                }
                l++;
            }
            if(l<=r) {
                ans = Math.max(ans, r - l);
            }
        }
        return ans;
    }
}
