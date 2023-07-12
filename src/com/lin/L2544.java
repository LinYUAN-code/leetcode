package src.com.lin;

public class L2544 {
    public int alternateDigitSum(int n) {
        if(n < 10) {
            return n;
        }
        int base = 10;
        int ans = 0;
        while(base * 10 <= n) {
            base *= 10;
        }
        int k = 1;
        while(n > 0) {
            ans += k * (n / base);
            n %= base;
            base /= 10;
            k *= -1;
        }
        return ans;
    }
}
