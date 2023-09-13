package src.com.lin;

import java.util.Arrays;

public class L1921 {
    class Monster implements Comparable<Monster> {
        public int arriveTime;
        public int kaDian;
        Monster(int dist,int time) {
            this.arriveTime = (int) Math.floor((double)dist / time);
            kaDian = (dist % time == 0 ? 1 : 0);
        }
        @Override
        public int compareTo(Monster o) {
            if(arriveTime == o.arriveTime) {
                return o.kaDian - kaDian;
            }
            return arriveTime - o.arriveTime;
        }
    }
    public int eliminateMaximum(int[] dist, int[] speed) {
        Monster[] monsters = new Monster[dist.length];
        for (int i = 0; i < speed.length; i++) {
            monsters[i] = new Monster(dist[i], speed[i]);
        }
        int ans = 0;
        Arrays.sort(monsters);
        for (int i = 0; i < monsters.length; i++) {
            if(monsters[i].arriveTime < i) {
                break;
            }
            if(monsters[i].arriveTime == i && monsters[i].kaDian == 1) {
                break;
            }
            ans++;
        }
        return ans;
    }
}
