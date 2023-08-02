package src.com.lin;

import java.util.HashMap;
import java.util.Map;

public class L822 {
    public int flipgame(int[] fronts, int[] backs) {
        int ans = Integer.MAX_VALUE;
        Map<Integer,Integer> mp = new HashMap<>();
        for (int i = 0; i < backs.length; i++) {
            if(fronts[i] == backs[i]) {
                mp.put(fronts[i], 1);
            }
        }
        for (int i = 0; i < backs.length; i++) {
            if(mp.get(fronts[i]) == null) {
                ans = Math.min(ans, fronts[i]);
            }
            if(mp.get(backs[i]) == null) {
                ans = Math.min(ans, backs[i]);
            }
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }
}
