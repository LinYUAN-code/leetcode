package src.com.lin;

public class L392 {
    public boolean isSubsequence(String s, String t) {
        if(s.length() == 0)return true;
        if(s.length() > t.length())return false;
        int p = 0;
        for(char ch :  t.toCharArray()) {
            if(ch == s.charAt(p)) {
                p++;
                if(p == s.length()) {
                    return true;
                }
            }
        }
        return false;
    }
}
