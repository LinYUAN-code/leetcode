package src.com.lin;

public class L2352 {
    public int equalPairs(int[][] grid) {
        // n ^ 3
        int ans = 0;
        int n = grid.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if(grid[i][k] != grid[k][j])break;
                    if(k == n - 1) {
                        ans++;
                    }                    
                }   
            }
        }
        return ans;
    }
}
