package src.com.lin;

public class L980 {
    int[] dx = new int[]{-1,1,0,0};
    int[] dy = new int[]{0,0,-1,1}; 
    public int uniquePathsIII(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int num = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(grid[i][j] == 1 || grid[i][j] == 0 || grid[i][j] == 2) {
                    num++;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(grid[i][j] == 1) {
                    return dfs(i, j, grid, num, 1);
                }
            }
        }
        return -1;
    }
    public int dfs(int x,int y,int[][] grid,int tot,int num) {
        if(num == tot) {
            if(grid[x][y] == 2){
                return 1;
            } else {
                return 0;
            }
        }
        int n = grid.length;
        int m = grid[0].length;
        int ans = 0;
        int t = grid[x][y];
        grid[x][y] = 1;
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx < 0 || nx == n || ny < 0 || ny == m)continue;
            if(grid[nx][ny] == 0) {
                ans += dfs(nx, ny, grid, tot, num + 1);
            }
            if(grid[nx][ny] == 2 && num == tot - 1) {
                ans += dfs(nx, ny, grid, tot, num + 1);
            }
        }
        grid[x][y] = t;
        return ans;
    }
}
