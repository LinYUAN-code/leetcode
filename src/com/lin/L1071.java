package src.com.lin;

public class L1071 {
    public String gcdOfStrings(String str1, String str2) {
        if(str1.length() < str2.length()) {
            return gcdOfStrings(str2, str1);
        }
        for(int i=0;i<str2.length();i++) {
            if(str1.charAt(i) != str2.charAt(i)) {
                return "";
            }
        }
        for(int i=str2.length();i>0;i--) {
            if(check(str1, str2.substring(0,i)) && check(str2, str2.substring(0,i))) {
                return str2.substring(0,i);
            }
        }
        return "";
    }
    public boolean check(String str,String gcdS) {
        int i=0;
        while(i < str.length()) {
            if(i + gcdS.length() > str.length()) {
                return false;
            }
            for(int j=0;j<gcdS.length();j++) {
                if(str.charAt(i) != gcdS.charAt(j)) {
                    return false;
                }
                i++;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        L1071 solution = new L1071();
        // System.out.println(solution.gcdOfStrings("ABCABC", "ABC"));
        System.out.println(solution.gcdOfStrings("ABCDEF", "ABC"));
    }
}
