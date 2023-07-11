package src.com.lin;

public class L1911 {
    public long maxAlternatingSum(int[] nums) {
        long max_0 = nums[0];
        long max_1 = Long.MIN_VALUE + 100000;
        for(int i=1;i<nums.length;i++) {
            max_0 = Math.max(max_0, Math.max(max_1 + nums[i], nums[i]));
            max_1 = Math.max(max_1, max_0 - nums[i]);
        }
        return Math.max(max_0,max_1);
    }
}
