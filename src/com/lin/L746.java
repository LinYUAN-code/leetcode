package src.com.lin;

import java.util.Arrays;

public class L746 {
    public int minCostClimbingStairs(int[] cost) {
        int dp[] = new int[cost.length + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = dp[1] = 0;
        
        for (int i = 0; i < dp.length; i++) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i] + cost[i]);
            if(i + 2 < dp.length) {
                dp[i + 2] = Math.min(dp[i + 2], dp[i] + cost[i]);
            }
        }

        return dp[cost.length];
    }
}
