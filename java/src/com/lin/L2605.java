package src.com.lin;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class L2605 {
    public int minNumber(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for(int num : nums1) {
            set1.add(num);
        }
        Set<Integer> set2 = new HashSet<>();
        for(int num : nums2) {
            set2.add(num);
        }
        for(int i=10;i<100;i++) {
            int a = i % 10;
            int b = i / 10;
            if((set1.contains(a) || set1.contains(b)) && (set2.contains(a) || set2.contains(b))) {
                return i;
            }
        }
        return -1;
    }
}
