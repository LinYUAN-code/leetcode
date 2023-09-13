

package src.com.lin;

/**
 * L2522
 */
public class L2522 {
    public int captureForts(int[] forts) {
        int ans = 0;
        int pre = -1;
        int num = 0;
        for(int i=0;i<forts.length;i++) {
            if(forts[i] == 1) {
                pre = i;
                num=0;
            }
            if(forts[i] == 0) {
                num++;
            }
            if(forts[i] == -1) {
                if(pre != -1) {
                    ans = Math.max(ans, num);
                }
                num=0;
                pre = -1;
            }
        }

        pre = -1;
        num = 0;
        for(int i=forts.length-1;i>=0;i--) {
            if(forts[i] == 1) {
                pre = i;
                num=0;
            }
            if(forts[i] == 0) {
                num++;
            }
            if(forts[i] == -1) {
                if(pre != -1) {
                    ans = Math.max(ans, num);
                }
                num=0;
                pre = -1;
            }
        }

        return ans;
    }
}