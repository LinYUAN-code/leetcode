package src.com.lin;

public class L1732 {
    public int largestAltitude(int[] gain) {
        int h = 0;
        int ans = 0;
        for(int gap : gain) {
            h += gap;
            ans = Math.max(ans, h);
        }
        return ans;
    }
}
