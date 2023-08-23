package src.com.lin;

import java.util.Stack;

public class L739 {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] ans = new int[temperatures.length];
        Stack<Integer> stack = new Stack<>();
        for (int i = temperatures.length - 1; i >= 0; i--) {
            while(stack.size() > 0 && temperatures[stack.peek()] <= temperatures[i]) {
                stack.pop();
            }
            ans[i] = (stack.size() > 0 ? stack.peek() : i) - i;
            stack.add(i);
        }
        return ans;
    }
}
