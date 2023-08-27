package src.com.lin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class L2831 {
    public int longestEqualSubarray(List<Integer> nums, int k) {
        Map<Integer,List<Integer>> mp = new HashMap<>();
        for (int i = 0; i < nums.size(); i++) {
            int num = nums.get(i);
            if(mp.get(num) == null) {
                mp.put(num, new ArrayList<>());
            }
            mp.get(num).add(i);
        }
        int ans = 0;
        for(List<Integer> arr : mp.values()) {
            ans = Math.max(ans, handle(arr, k));
        }
        return ans;
    }
    public int handle(List<Integer> arr,int k) {
        int ans = 0;
        int l = 0;
        for (int r = 0; r < arr.size(); r++) {
            while(arr.get(r) - arr.get(l) - (r - l) > k) {
                l++;
            }
            ans = Math.max(ans, (r - l + 1));
        }
        return ans;
    }
}
