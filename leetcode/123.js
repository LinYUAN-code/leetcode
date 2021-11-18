func maxProfit(prices []int) int {
    f := [3][2][100005]int{}
    f[0][0][0] = 0;
    f[0][1][0] = -prices[0];
    f[1][1][0] = -0x3f3f3f3f
    n := len(prices)
    for i:=1;i<n;i++ {
        f[0][0][i] = f[0][0][i-1]
        f[0][1][i] = max(f[0][1][i-1],f[0][0][i-1]-prices[i])

        f[1][0][i] = max(f[1][0][i-1],f[0][1][i-1]+prices[i])
        f[1][1][i] = max(f[1][1][i-1],f[1][0][i-1]-prices[i]);

        f[2][0][i] = max(f[2][0][i-1],f[1][1][i-1]+prices[i])
    }
    return max(0,max(f[1][0][n-1],f[2][0][n-1]))
}

func max(a,b int) int {
    if a < b {
        return b
    }
    return a
}