package src.com.lin;

import java.util.HashMap;
import java.util.Map;

public class L1207 {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer,Integer> mp = new HashMap<>();
        Map<Integer,Object> mp1 = new HashMap<>();
        for(int num :  arr) {
            mp.merge(num, 1, (a,b) -> a + b);
        }
        for(int num : mp.values()) {
            if(mp1.get(num) != null) {
                return false;
            }
            mp1.put(num, Object.class);
        }
        return true;
    }
}
