package src.com.lin;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class L56 {
    public int[][] merge(int[][] intervals) {
        
        List<int[]> ans = new ArrayList<>();
        Arrays.sort(intervals,(a,b)->{
            return a[0] - b[0];
        });
        int[] k = new int[]{-1,-1};
        for(int[] interval : intervals) {
            if(k[0] == -1) {
                k[0] = interval[0];
                k[1] = interval[1];
                continue; 
            }
            if(interval[0] >= k[0] && interval[0] <= k[1]) {
                k[1] = Math.max(k[1], interval[1]);
            } else {
                ans.add(new int[]{k[0],k[1]});
                k[0] = interval[0];
                k[1] = interval[1];
            }
        }
        ans.add(k);
        return ans.toArray(new int[0][]);
    }
}
