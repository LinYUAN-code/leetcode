package src.com.lin;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class L2215 {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Map<Integer,Boolean> mp1 = new HashMap<>();
        Map<Integer,Boolean> mp2 = new HashMap<>(); 
        List<Integer> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();
        for(int num :  nums1) {
            mp1.put(num, true);
        }
        for(int num :  nums2) {
            mp2.put(num, true);
        }
        for(int num :  mp1.keySet()) {
            if(mp2.get(num) == null) {
                a.add(num);
            }
        }
        for(int num : mp2.keySet()) {
            if(mp1.get(num) == null) {
                b.add(num);
            }
        }
        return new ArrayList<>(Arrays.asList(a,b));
    }
}
