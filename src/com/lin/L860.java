package src.com.lin;

/**
 * L860
 */
public class L860 {
    public boolean lemonadeChange(int[] bills) {
        int num_5 = 0;
        int num_10 = 0;
        for(int bill : bills) {
            switch (bill) {
                case 5:
                    num_5++;
                    break;
                case 10:
                    if(num_5 == 0)return false;
                    num_5--;
                    num_10++;
                    break;
                case 20:
                    bill -= 5;
                    if(num_10 != 0) {
                        num_10--;
                        bill -= 10;
                    }
                    if(bill / 5 > num_5) {
                        return false;
                    }
                    num_5 -= bill / 5;
                    break;
                default:
                    break;
            }
        }
        return true;
    }
}