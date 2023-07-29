
package src.com.lin;

import java.util.ArrayList;
import java.util.List;

/**
 * L2050
 */
public class L2050 {
    @SuppressWarnings("unchecked")
    public int minimumTime(int n, int[][] relations, int[] time) {
        this.f = new int[n];
        this.e = new List[n];
        for (int i = 0; i < n; i++) {
            this.e[i] = new ArrayList<>();
        }
        int deg[] = new int[n];
        for(int edge[] : relations) {
            deg[edge[0] - 1]++;
            this.e[edge[1] - 1].add(edge[0] - 1);
        }
        int ans = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if(deg[i] == 0) {
                ans = Math.max(ans, dfs(i,time));
            }
        }
        return ans;
    }
    int f[];
    List<Integer> e[];
    public int dfs(int u,int time[]) {
        if(this.f[u] != 0)return f[u];
        int maxx = 0;
        for(int next : e[u]) {
            maxx = Math.max(maxx, dfs(next, time));
        } 
        return f[u] = maxx + time[u];
    }
}