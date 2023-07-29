package src.com.lin;

import java.lang.reflect.Array;
import java.util.Arrays;

/**
 * L2300
 */
public class L2300 {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int ans[] = new int[spells.length];
        Arrays.sort(potions);
        for (int i = 0; i < spells.length; i++) {
            ans[i] = solve(spells[i], potions, success);
        }
        return ans;
    }
    public int solve(int value,int[] potions, long success) {
        int l = 0;
        int r = potions.length;
        while(l < r) {
            int mid = (l + r) >> 1;
            if(value * 1l * potions[mid] >= success)r = mid;
            else l = mid + 1; 
        }
        return potions.length - r;
    }
}