package src.com.lin;

public class L2240 {
    public long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long ans = 0;
        for(int i=0;;i++) {
            if(cost1 * i > total) {
                break;
            }
            ans += (total - cost1 * i) / cost2 + 1;
        }
        return ans;
    }
}
