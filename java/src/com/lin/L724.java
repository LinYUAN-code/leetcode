package src.com.lin;

public class L724 {
    public int pivotIndex(int[] nums) {
        for(int i=0;i<nums.length;i++) {
            nums[i] += i-1 >= 0 ? nums[i - 1] : 0;
        }
        for(int i=0;i<nums.length;i++) {
            if((i-1 >= 0 ? nums[i - 1] : 0) == nums[nums.length - 1] - nums[i]) {
                return i;
            }
        }
        return -1;
    }
}
