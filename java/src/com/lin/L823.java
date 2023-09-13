package src.com.lin;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class L823 {
    public final int mod = 1000_000_000 + 7;
    Map<Integer,Integer> f = new HashMap<>();
    Set<Integer> set = new HashSet<>();
    public int numFactoredBinaryTrees(int[] arr) {
        Arrays.sort(arr);
        for(int num : arr) {
            set.add(num);
        }
        int ans = 0;
        for(int num : arr) {
            ans = (ans + dfs(num, arr)) % mod;
        }
        return ans;
    }
    public int dfs(int u,int[] arr) {
        if(f.containsKey(u)) {
            return f.get(u);
        }
        int ans = 1;
        for(int num : arr) {
            if(u < num) {
                break;
            }
            if(u % num != 0) {
                continue;
            }
            if(set.contains(u / num)) {
                ans = (int) (ans + (long)dfs(num, arr) * dfs(u / num, arr) % mod) % mod;
            }
        }
        f.put(u, ans);
        return ans;
    }
}
