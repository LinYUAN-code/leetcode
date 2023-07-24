package src.com.lin;

import java.util.LinkedList;
import java.util.Queue;

/**
 * L1926
 */
public class L1926 {
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
    int dx[] = {-1,1,0,0};
    int dy[] = {0,0,-1,1};
    public int nearestExit(char[][] maze, int[] entrance) {
        int n = maze.length;
        int m = maze[0].length;
        Queue<Pos> q = new LinkedList<>();
        boolean st[][] = new boolean[n][m];
        q.add(new Pos(entrance[0], entrance[1],0));
        st[entrance[0]][entrance[1]] = true;
        while(q.size() > 0) {
            Pos u = q.poll();
            for (int i = 0; i < 4; i++) {
                int x = u.x + dx[i];
                int y = u.y + dy[i];
                if(x<0 || x>=n || y<0 || y>=m)continue;
                if(st[x][y])continue;
                if(maze[x][y] == '+')continue;
                if(x==0 || x==n-1 || y==0 || y==m-1)return u.d + 1;
                q.add(new Pos(x, y,u.d + 1));
                st[x][y] = true;
            }
        }
        return -1;
    }
}