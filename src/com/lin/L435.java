package src.com.lin;

import java.util.Arrays;

public class L435 {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals,(a,b)->{
            return a[1] - b[1];
        });
        int ans = 0;
        int right = Integer.MIN_VALUE;
        for(int interval[] : intervals) {
            if(interval[0] < right) {
                ans++;
            } else {
                right = interval[1];
            }
        }
        return ans;
    }
}
