package src.com.lin;


public class L345 {
    public  boolean contains(char a[],char ch) {
        for(char item : a) {
            if(item == ch) {
                return true;
            }
        }
        return false;
    }
    public String reverseVowels(String s) {
        char ans[] = s.toCharArray();
        char vowerls[] = {'a','e','i','o','u','A','E','I','O','U'};

        int l = 0;
        int r = s.length() - 1;

        while(l<r) {
            while(l<r && !contains(vowerls, ans[l])) {
                l++;
            }
            while(l<r && !contains(vowerls, ans[r])) {
                r--;
            }
            if(l<r) {
                char t = ans[l];
                ans[l++] = ans[r];
                ans[r--] = t;
            }
        }
        return new String(ans);
    }
}
