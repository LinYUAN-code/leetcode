package src.com.lin;

import java.util.LinkedList;
import java.util.Queue;

class Pos {
    public int x;
    public int y;
    public int d;
    Pos(int x,int y,int d) {
        this.x = x;
        this.y = y;
        this.d = d;
    }
}

public class L994 {
    int dx[] = {-1,1,0,0};
    int dy[] = {0,0,-1,1};
    public int orangesRotting(int[][] grid) {
        Queue<Pos> q = new LinkedList<>();
        int n = grid.length;
        int m = grid[0].length;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(grid[i][j] == 2) {
                    q.add(new Pos(i, j, 0));
                }
            }
        }
        while(q.size() > 0) {
            Pos u = q.poll();
            ans = Math.max(ans, u.d);
            for (int i = 0; i < 4; i++) {
                int x = u.x + dx[i];
                int y = u.y + dy[i];
                if(x < 0 || x >= n || y < 0 || y >= m)continue;
                if(grid[x][y] == 1) {
                    grid[x][y] = 2;
                    q.add(new Pos(x, y, u.d + 1));
                }
            }
        } 
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(grid[i][j] == 1) {
                    return -1;
                }
            }
        }
        return ans;
    }
}
