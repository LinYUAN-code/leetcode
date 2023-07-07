package src.com.lin;

public class L1768 {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<word1.length();i++) {
            sb.append(word1.charAt(i));
            if(i<word2.length()) {
                sb.append(word2.charAt(i));
            }
            if(i == word1.length() - 1) {
                while(++i<word2.length()) {
                    sb.append(word2.charAt(i));
                }
            }            
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        L1768 solution = new L1768();
        System.out.println(solution.mergeAlternately("ab", "pqrs"));
    }
}
