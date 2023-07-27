package src.com.lin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

public class L2336 {
    class SmallestInfiniteSet {
        int maxx;
        PriorityQueue<Integer> q;
        Map<Integer,Boolean> mp;
        public SmallestInfiniteSet() {
            mp = new HashMap<>();
            q = new PriorityQueue<>();
            maxx = 1;
            q.add(maxx);
        }
        
        public int popSmallest() {
            int u = q.poll();
            if(u == maxx) {
                maxx++;
                q.add(maxx);
            }
            this.mp.put(u, true);
            return u;
        }
        
        public void addBack(int num) {
            if(mp.get(num) == null)return;
            q.add(num);
            mp.remove(num);
        }
    }    
}
