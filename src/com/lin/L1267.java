
package src.com.lin;

/**
 * L1267
 */
public class L1267 {
    public int countServers(int[][] grid) {
        int pre;
        int ans = 0;
        for (int i = 0; i < grid.length; i++) {
            pre = -1;
            for (int j = 0; j < grid[0].length; j++) {
                if(grid[i][j] == 0)continue;
                if(pre == -1 ) {
                    pre = j;
                } else {
                    grid[i][j] = 2;
                    ans++;
                    if(grid[i][pre] == 1) {
                        ans++;
                        grid[i][pre] = 2;
                    }
                }
            }
        }

        for (int j = 0; j < grid[0].length; j++) {
            pre = -1;
            for (int i = 0; i < grid.length; i++) {
                if(grid[i][j] == 0)continue;
                if(pre == -1) {
                    pre = i;
                } else {
                    if(grid[i][j] == 1) {
                        grid[i][j] = 2;
                        ans++;
                    }
                    if(grid[pre][j] == 1) {
                        ans++;
                        grid[pre][j] = 2;
                    }
                }
            }
        }
        return ans;
    }   
}