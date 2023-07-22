package src.com.lin;

public class L547 {
    int f[];
    public int findCircleNum(int[][] isConnected) {
        // 并查集
        int n = isConnected.length;
        this.f = new int[n];
        for (int i = 0; i < n; i++) {
            f[i] = i;
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if(isConnected[i][j] == 1)  {
                    join(i, j);
                }
            }
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if(f[i] == i)ans++;
        }
        return ans;
    }
    int find(int a) {
        if(f[a] != a) {
            return f[a] = find(f[a]);
        }
        return a;
    }
    void join(int a,int b) {
        f[find(a)] = find(f[b]);
    }
}
