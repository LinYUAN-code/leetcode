package src.com.lin;

import java.util.Stack;

public class L735 {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> st = new Stack<>();
        for(int weight : asteroids) {
            if(weight > 0) {
                st.push(weight);
                continue;
            } 
            boolean destoryFlag = false;
            while(st.size() > 0 && st.peek() > 0) {
                if(st.peek() < -weight) {
                    st.pop();
                } else {
                    if(st.peek() == -weight) {
                        st.pop();
                    }
                    destoryFlag = true;
                    break;
                }
            }
            if(!destoryFlag) {
                st.push(weight);
            }
        }
        int ans[] = new int[st.size()];
        for(int i=ans.length - 1;i>=0;i--) {
            ans[i] = st.pop();
        }
        return ans;
    }
}
