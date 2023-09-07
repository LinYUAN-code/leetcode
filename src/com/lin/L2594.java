package src.com.lin;

import java.math.BigInteger;

public class L2594 {
    public long repairCars(int[] ranks, int cars) {
        BigInteger l = BigInteger.ZERO;
        BigInteger r = new BigInteger("100000000000000");
        while(l.compareTo(r) < 0) {
            BigInteger mid = l.add(r).divide(BigInteger.TWO);
            if(check(mid, ranks, cars))r = mid;
            else l = mid.add(BigInteger.ONE);
        }
        return l.longValue();
    }
    private boolean check(BigInteger time,int[] ranks,int cars) {
        BigInteger ans = BigInteger.ZERO;
        for(int i=0;i<ranks.length;i++) {
            ans = ans.add(time.divide(new BigInteger(ranks[i] + "")).sqrt());
        }
        return ans.compareTo(new BigInteger(cars + "")) >= 0;
    }
}
