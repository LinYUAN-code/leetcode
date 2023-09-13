package src.com.lin;

public class L334 {
    public boolean increasingTriplet(int[] nums) {
        int minn = nums[0];
        int mid = Integer.MAX_VALUE;
        for(int i=1;i<nums.length;i++) {
            if(nums[i] > minn) {
                mid = Math.min(mid, nums[i]);
            }
            if(nums[i] > mid) {
                return true;
            }
            minn = Math.min(minn, nums[i]);
        }
        return false;
    }
}
