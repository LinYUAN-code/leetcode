package src.com.lin;

public class L394 {
    public String decodeString(String s) {
        StringBuilder sb = new StringBuilder();
        StringBuilder ans = new StringBuilder();
        int left_num = 0;
        int num = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(left_num==0 && Character.isDigit(ch)) {
                num = num * 10 + Integer.parseInt(ch + "");
            } else if(ch == '[') {
                if(left_num != 0) {
                    sb.append(ch);
                }
                left_num++;
            } else if(ch == ']') {
                left_num--;
                if(left_num == 0) {
                    ans.append(decodeString(sb.toString()).repeat(num));
                    sb.delete(0, sb.length());
                    num = 0;
                } else {
                    sb.append(ch);
                }
            } else {
                if(num == 0) {
                    ans.append(ch);
                } else {
                    sb.append(ch);
                }
            }
        }

        return ans.toString();
    }
    public static void main(String[] args) {
        L394 solution = new L394();
        System.out.println(solution.decodeString("3[a2[c]]"));
    }
}
