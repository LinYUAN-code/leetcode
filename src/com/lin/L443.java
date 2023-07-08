package src.com.lin;

public class L443 {
    public int compress(char[] chars) {
        int p = 0;
        int num = 0;
        char pre = 0;
        for(char ch : chars) {
            if(ch == pre) {
                num++;
            } else {
                if(pre != 0) {
                    chars[p++] = pre;
                    if(num > 1) {
                        for(char nCh : Integer.toString(num).toCharArray()) {
                            chars[p++] = nCh;
                        }
                    }
                }
                num = 1;
                pre = ch;
            }
        }
        if(pre != 0) {
            chars[p++] = pre;
            if(num > 1) {
                for(char nCh : Integer.toString(num).toCharArray()) {
                    chars[p++] = nCh;
                }
            }
        }
        return p;
    }
    public static void main(String[] args) {
    }
}
