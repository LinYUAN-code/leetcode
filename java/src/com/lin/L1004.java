package src.com.lin;

public class L1004 {
    public int longestOnes(int[] nums, int k) {
        // 转化为求： 最长的序列其中最多包含k个0
        int kNum = 0;
        int l = 0;
        int ans = 0;
        for(int r=0;r<nums.length;r++) {
            kNum += 1 ^ nums[r];
            while(l <= r && kNum > k) {
                if(nums[l] == 0) {
                    kNum--;
                }
                l++;
            }
            if(l<=r) {
                ans = Math.max(ans, r - l + 1);
            }
        }
        return ans;
    }
}
