package src.com.lin;

/**
 * L1456
 */
public class L1456 {
    public int maxVowels(String s, int k) {
        String volu = "aeious";
        int ans = 0;
        int sum = 0;
        char cs[] = s.toCharArray();
        for(int r=0;r<cs.length;r++) {
            if(volu.indexOf(cs[r]) != -1) {
                sum++;
            }
            if(r >= k) {
                if(volu.indexOf(cs[r-k]) != -1) {
                    sum--;
                }
            }
            if(r >= k - 1) {
                ans = Math.max(ans, sum);
            }
        }
        return ans;
    }
}