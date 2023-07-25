package src.com.lin;

import java.util.PriorityQueue;

public class L2208 {
    public int halveArray(int[] nums) {
        PriorityQueue<Double> q = new PriorityQueue<>((a,b) -> {
            return b - a < 0 ? -1 : 1;
        });
        double sum = 0;
        double target = 0;
        int ans = 0;
        for(int num : nums) {
            q.add((double)num);
            sum += num;
        }
        target = sum / 2;
        while(sum > target) {
            ans++;
            Double u = q.poll();
            sum -= u / 2;
            q.add(u / 2);
        }
        return ans;
    }
}
