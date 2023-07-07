package src.com.lin;

import java.util.ArrayList;
import java.util.List;

public class L1431 {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int maxx = 0;
        for(int candie : candies) {
            maxx = Math.max(maxx, candie);
        }
        List<Boolean> ans = new ArrayList<>();
        for(int i=0;i<candies.length;i++) {
            if(candies[i] + extraCandies >= maxx) {
                ans.add(true);
            } else {
                ans.add(false);
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        
    }
}
