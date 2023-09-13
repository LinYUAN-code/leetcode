package src.com.lin;

public class L8015 {
    public int furthestDistanceFromOrigin(String moves) {
        int right = 0;
        int left = 0;
        for(char ch : moves.toCharArray()) {
            if(ch == 'R') {
                right++;
                left--;
            } else if(ch == 'L') {
                right--;
                left++;
            } else {
                right++;
                left++;
            }
        }
        return Math.max(right, left);
    }
}
