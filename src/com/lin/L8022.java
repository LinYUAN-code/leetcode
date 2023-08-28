package src.com.lin;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class L8022 {
    public long minimumPossibleSum(int n, int target) {
        Set<Integer> set = new HashSet<>();
        int num = 1;
        long ans = 0;
        for (int i = 0; i < n; i++) {
            while(set.contains(target - num)) {
                num++;
            }
            ans += num;
            set.add(num);
            num++;
        }
        return ans;
    }
}
