package src.com.lin;

import java.util.Arrays;
import java.util.stream.Collectors;

public class L2337 {
    public boolean canChange(String start, String target) {
        String s1 = Arrays.stream(start.split("_")).filter(s->s.length() > 0).collect(Collectors.joining());
        String s2 = Arrays.stream(target.split("_")).filter(s->s.length() > 0).collect(Collectors.joining());
        if(!s1.equals(s2))return false;
        int i = start.length() - 1;
        int space0 = 0;
        int j = target.length() - 1;
        int space1 = 0;
        while(i >= 0 && j >= 0) {
            while(i >= 0 && start.charAt(i) != 'R') {
                if(start.charAt(i) == '_') {
                    space0++;
                }
                i--;
            }
            while(j >= 0 && target.charAt(j) != 'R') {
                if(target.charAt(j) == '_') {
                    space1++;
                }
                j--;
            }
            if(i < 0 || j < 0)break;
            if(space0 < space1) {
                return false;
            }
            i--;
            j--;
        }       
        i = 0;
        j = 0;
        space0 = 0;
        space1 = 0;
        while(i < start.length() && j < target.length()) {
            while(i < start.length() && start.charAt(i) != 'L') {
                if(start.charAt(i) == '_') {
                    space0++;
                }
                i++;
            }
            while(j < target.length() && target.charAt(j) != 'L') {
                if(target.charAt(j) == '_') {
                    space1++;
                }
                j++;
            }
            if(i >= start.length() || j >= target.length())break;
            if(space0 < space1) {
                return false;
            }
            i++;
            j++;
        }
        
        return true;
    }
}
