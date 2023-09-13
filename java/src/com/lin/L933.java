package src.com.lin;

import java.util.LinkedList;
import java.util.Queue;

public class L933 {
    class RecentCounter {
        public Queue<Integer> q;
        public RecentCounter() {
            this.q = new LinkedList<>();
        }
        
        public int ping(int t) {
            q.offer(t);
            while(q.peek() < t - 3000) {
                q.poll();
            }
            return q.size();
        }
    }

}
