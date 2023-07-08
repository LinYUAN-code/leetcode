package src.com.lin;

public class L605 {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        if(n == 0)return true;
        for(int i=0;i<flowerbed.length;i++) {
            if(flowerbed[i] == 0 && ( (i-1 >=0 ? flowerbed[i-1] : 0) == 0 && (i+1 <= flowerbed.length - 1 ? flowerbed[i+1] : 0) == 0)) {
                flowerbed[i] = 1;
                n--;
                if(n == 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
