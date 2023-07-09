package src.com.lin;

public class L643 {
    public double findMaxAverage(int[] nums, int k) {
        int ans = Integer.MIN_VALUE;
        int sum = 0;
        for(int r=0;r<nums.length;r++) {
            sum += nums[r];
            if(r >= k) {
                sum -= nums[r - k];
            }
            if(r >= k - 1) {
                ans = Math.max(ans, sum);
            }
        }
        return ans * 1.0 / k;
    }
}
