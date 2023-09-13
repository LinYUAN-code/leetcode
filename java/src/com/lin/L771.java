package src.com.lin;

public class L771 {
    public int numJewelsInStones(String jewels, String stones) {
        int ans = 0;
        for(char ch : stones.toCharArray()) {
            if(jewels.indexOf(ch) != -1) {
                ans++;
            }
        }
        return ans;
    }
}
