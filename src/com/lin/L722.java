package src.com.lin;

import java.util.ArrayList;
import java.util.List;

public class L722 {
    String[] source;
    int i;
    int j;
    int tot;
    int used;
    public List<String> removeComments(String[] source) {
        this.source = source;
        this.i = 0;
        this.j = 0;
        List<String> ans = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        while(left() > 0) {
            Character u = pop();

            if(u == '\n') {
                if(sb.length() > 0) {
                    ans.add(sb.toString());
                    sb = new StringBuilder();
                }
                continue;
            }

            if(left() == 0) {
                sb.append(u);
                break;
            }
            if(u == '/') {
                if(next() == '/') {
                    while(next() != '\n') {
                        pop();
                    }
                    continue;
                } else if(next() == '*') {
                    pop();
                    while(true) {
                        Character a = pop();
                        Character b = next();
                        if(a == '*' && b == '/') {
                            pop();
                            break;
                        };
                    }
                    continue;
                }
            }
            
            sb.append(u);
        }
        return ans;
    }
    Character pop() {
        Character ans;
        if(j == source[i].length()) {
            ans = '\n';
            j = 0;
            i++;
        } else {
            ans =  source[i].charAt(j);
            j++;
        }
        used++;
        return ans;
    }
    Character next() {
        Character ans;
        if(j == source[i].length()) {
            ans = '\n';
        } else {
            ans =  source[i].charAt(j);
        }
        return ans;
    }
    int left() {
        if(tot != 0) {
            return tot - used;
        }
        for (String line : source) {
            tot += line.length();
        }
        tot += source.length;
        return tot - used;
    }
}
