package src.com.lin;

import java.util.ArrayList;
import java.util.List;

public class L1466 {
    int ans = 0;
    List<List<Integer> > e = new ArrayList<>();
    public int minReorder(int n, int[][] connections) {
        for(int i=0;i<n;i++) {
            this.e.add(new ArrayList<>());
        }
        for(int edge[] : connections) {
            this.e.get(edge[0]).add(edge[1]);
            this.e.get(edge[1]).add(-edge[0]);
        }
        dfs(0,Integer.MIN_VALUE);
        return ans;
    }
    void dfs(int u,int fa) {
        for(int next : e.get(u)) {
            if(next == fa || next == -fa)continue;
            if(next > 0) {
                ans++;
            }
            dfs(Math.abs(next),u);
        }
    }
}
