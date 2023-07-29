package src.com.lin;

public class L338 {
    public int[] countBits(int n) {
        int ans[] = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            ans[i] = countBit(i);
        }
        return ans;
    }
    public int countBit(int num) {
        int ans = 0;
        for (; num > 0; num -= num&-num) {
            ans++;
        }
        return ans;
    }
}
