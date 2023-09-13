package src.com.lin;

import java.util.ArrayList;
import java.util.List;

public class L834 {
    int down[]; //以i为根结点 向下的所有距离的和
    int up[];  //以i为根结点 向上的所有距离的和
    int cnt[]; //以i为根结点 向下所有的节点数量
    List<List<Integer> > e;
    public int[] sumOfDistancesInTree(int n, int[][] edges) {
        this.down = new int[n];
        this.up = new int[n];
        this.cnt = new int[n];
        this.e = new ArrayList<>();
        for(int i=0;i<n;i++) {
            this.e.add(new ArrayList<>());
        }
        for(int edge[] : edges) {
            this.e.get(edge[0]).add(edge[1]);
            this.e.get(edge[1]).add(edge[0]);
        }
        dfsDown(0,-1);
        dfsUp(0,-1, 1);
        int ans[] = new int[n];
        for (int i = 0; i < n; i++) {
            // System.out.println(down[i] + " " + up[i] + " " + cnt[i]);
            ans[i] = down[i] + up[i];
        }
        return ans;
    }
    void dfsDown(int node, int fa) {
        this.cnt[node] = 1;
        for(int next : this.e.get(node)) {
            if(next == fa) {
                continue;
            }
            dfsDown(next, node);
            this.cnt[node] += this.cnt[next];
            this.down[node] += this.cnt[next] + this.down[next];
        }
    }
    void dfsUp(int node, int fa, int upCnt) {
        for(int next : this.e.get(node)) {
            if(next == fa)continue;
            up[next] = up[node] + upCnt + (down[node] - (down[next] + cnt[next]) + cnt[node] - 1 - cnt[next]);
            dfsUp(next, node, upCnt + cnt[node] - cnt[next]);
        }   
    }
}
