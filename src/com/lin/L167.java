package src.com.lin;

public class L167 {
    public int[] twoSumONLogN(int[] numbers, int target) {
        for(int i=0;i<numbers.length;i++) {
            int value = target - numbers[i];
            int l = i;
            int r = numbers.length - 1;
            while(l<r) {
                int mid = (l + r + 1) >> 1;
                if(numbers[mid] <= value) {
                    l = mid;
                } else {
                    r = mid -1;
                }
            }
            if(numbers[l] == value) {
                return new int[]{i + 1, l + 1};
            }
        }
        return null;
    }

    public int[] twoSumON(int[] numbers, int target) {
        int l = 0;
        int r = numbers.length - 1;
        while(l<r) {
            if(numbers[l] + numbers[r] == target) {
                return new int[]{l + 1, r + 1};
            } 
            while(numbers[l] + numbers[r] > target) {
                r--;
            }
            while(numbers[l] + numbers[r] < target) {
                l++;
            }
        }
        return null;
    }
}
