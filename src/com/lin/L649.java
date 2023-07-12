package src.com.lin;

import java.util.LinkedList;
import java.util.Queue;

public class L649 {
    public String predictPartyVictory(String senate) {
        Queue<Integer> Radiant = new LinkedList<>();
        Queue<Integer> Dire = new LinkedList<>();
        for (int i = 0; i < senate.length(); i++) {
            char ch = senate.charAt(i);
            if(ch == 'R') {
                Radiant.offer(i);
            } else {
                Dire.offer(i);
            }
        }
        while(!Radiant.isEmpty() && !Dire.isEmpty()) {
            int r = Radiant.poll();
            int d = Dire.poll();
            if(r > d) {
                Dire.offer(d + senate.length());
            } else {
                Radiant.offer(r + senate.length());
            }
        }
        return Radiant.size() == 0 ? "Dire" : "Radiant";
    }
}
