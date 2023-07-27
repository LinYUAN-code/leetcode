package src.com.lin;

import java.util.PriorityQueue;

public class L215 {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a,b) -> b-a);
        for (int num : nums) {
            q.add(num);
        }
        for (int i = 0; i < k - 1; i++) {
            q.poll();
        }
        return q.peek();
    }
}
