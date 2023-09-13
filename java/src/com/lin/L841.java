package src.com.lin;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class L841 {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        Queue<Integer> q = new LinkedList<>();
        boolean st[] = new boolean[rooms.size()];
        st[0] = true;
        for(Integer key : rooms.get(0)) {
            q.add(key);
        }
        while(q.size() > 0) {
            Integer key = q.poll();
            if(st[key])continue;
            st[key] = true;
            for(Integer nKey : rooms.get(key)) {
                q.add(nKey);
            }
        }
        for (int i = 0; i < st.length; i++) {
            if(!st[i])return false;
        }
        return true;
    }
}
