package src.com.lin;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class L1654 {
    static private class PV {
        public int pos;
        public int backNum;
        public int step;
        PV(int pos,int backNum,int step) {
            this.pos = pos;
            this.backNum = backNum;
            this.step = step;
        }
    }
    public int minimumJumps(int[] forbidden, int a, int b, int x) {
        Queue<PV> q = new LinkedList<>();
        Set<Integer> forbiddenSet = new HashSet<>();
        for(int num : forbidden) {
            forbiddenSet.add(num);
        }
        q.add(new PV(0, 0, 0));
        Set<String> set = new HashSet<>();
        while(q.size() > 0) {
            PV u = q.poll();
            // System.out.println(u.pos + " " + u.backNum);
            if(u.pos == x) {
                return u.step;
            }
            if(u.backNum == 0) {
                int next = u.pos - b;
                if(next >= 0) {
                    int backNum = u.backNum + 1;
                    if(!set.contains(next + "#" + backNum) && !forbiddenSet.contains(next)) {
                        set.add(next + "#" + backNum);
                        q.add(new PV(next, backNum, u.step + 1));
                    }
                }
            }
            int next = u.pos + a;
            int backNum = 0;

            if(next > x + 100 * a) {
                continue;
            }
            if(!set.contains(next + "#" + backNum) && !forbiddenSet.contains(next)) {
                set.add(next + "#" + backNum);
                q.add(new PV(next, backNum, u.step + 1));
            }
            
        }
        return -1;
    }
}
