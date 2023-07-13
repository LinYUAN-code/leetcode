package src.com.lin;



public class L931 {
    public int minFallingPathSum(int[][] matrix) {
        int n = matrix.length;
        int f[][] = new int[n][2];
        for (int i = 0; i < n; i++) {
            f[i][0] = matrix[0][i];
        }
        for(int i=1;i<n;i++) {
            for(int j=0;j<n;j++) {
                f[j][i % 2] = Math.min(f[j][(i - 1)%2], Math.min(j - 1 >=0 ?  f[j - 1][(i - 1)%2] : Integer.MAX_VALUE - 100, j + 1 < n ? f[j + 1][(i - 1)%2] : Integer.MAX_VALUE - 100)) + matrix[i][j];
            }
        }
        int ans = Integer.MAX_VALUE;
        for(int i=0;i<n;i++) {
            ans = Math.min(ans, f[i][(n-1)%2]);
        }
        return ans;
    }
}
