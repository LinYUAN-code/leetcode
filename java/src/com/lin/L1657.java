package src.com.lin;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class L1657 {
    public boolean closeStrings(String word1, String word2) {
        // 操作1表示顺序无所谓
        // 操作2表示字符无所谓 只需要 各个字符的数量构成的数组相同即可
        Map<Character,Integer> mp1 = new HashMap<>();
        
        
        Map<Character,Integer> mp2 = new HashMap<>();

        for(char ch : word1.toCharArray()) {
            mp1.merge(ch, 1, (a,b) -> a + b);
        }
        for(char ch : word2.toCharArray()) {
            mp2.merge(ch, 1, (a,b) -> a + b);
        }
        Integer val1[] = mp1.values().toArray(new Integer[0]);
        Integer val2[] = mp2.values().toArray(new Integer[0]);
        Arrays.sort(val1);
        Arrays.sort(val2);
        return Arrays.equals(val1, val2) && mp1.keySet().equals(mp2.keySet());
    }
}
