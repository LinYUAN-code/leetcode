package src.com.lin;

public class L283 {
    public void moveZeroes(int[] nums) {
        int p = 0;
        for(int i=0;i<nums.length;i++) {
            if(nums[i] != 0 && i != p) {
                int t = nums[p];
                nums[p++] = nums[i];
                nums[i] = t;
            } else if(nums[i] != 0) {
                p++;
            }
        }
    }
}
