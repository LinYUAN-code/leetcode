package src.com.lin;

import java.util.List;

public class L2835 {
    public int minOperations(List<Integer> nums, int target) {
        // 二进制
        int[] a = new int[33];
        for (int i = 0; i < nums.size(); i++) {
            a[getEx(nums.get(i))]++;
        }
        for (int i = 0; i < 32; i++) {
            System.out.print(a[i] + " ");
            if(i == 31) {
                System.out.println("");
            }
        }
        int[] b = divide(target);
        for (int i = 0; i < 32; i++) {
            System.out.print(b[i] + " ");
            if(i == 31) {
                System.out.println("");
            }
        }

        for (int i = 0; i < 32; i++) {
            a[i] -= b[i];
        }
        
        int ans = 0;
        for (int i = 0; i < 32; i++) {
            if(a[i] > 0) {
                a[i + 1] += a[i] / 2;
            } else if(a[i] < 0) {
                boolean find = false;
                for (int j = i + 1; j < 32; j++) {
                    if(a[j] > 0) {
                        find = true;
                        break;
                    }
                }
                if(!find)return -1;
                for (int j = i + 1; j < 32; j++) {
                    if(a[j] != 0) {
                        if(a[j] > 0) {
                            a[j] -= 1;
                        }
                        ans += j - i;
                        break;
                    }
                }
            }
        }
        return ans;
    }
    public int getEx(int num) {
        int time = 0;
        while((num & 1) == 0) {
            num >>= 1;
            time++;
        }
        return time;
    }
    public int[] divide(int n) {
        int[] ans = new int[32];
        int num = 0;
        while(n > 0) {
            if((n & 1) == 1) {
                ans[num]++;
            }
            num++;
            n >>= 1;
        }
        return ans;
    }
}
