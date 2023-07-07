package src.com.lin;

import java.util.PriorityQueue;

public class L2532 {
    public int findCrossingTime(int n, int k, int[][] time) {
        PriorityQueue<Integer> waitLeft = new PriorityQueue<>((Integer a,Integer b) -> {
            int aV = time[a][0] + time[a][2];
            int bV = time[b][0] + time[b][2];
            return aV != bV ? bV - aV : b - a;
        });

        PriorityQueue<Integer> waitRight = new PriorityQueue<>((Integer a,Integer b) -> {
           int aV = time[a][0] + time[a][2];
           int bV = time[b][0] + time[b][2];
           return aV != bV ? bV - aV : b - a;
        });

        PriorityQueue<int[]> workLeft = new PriorityQueue<>((int a[],int b[]) -> {
            return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
        });

        PriorityQueue<int[]> workRight = new PriorityQueue<>((int a[],int b[]) -> {
            return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
        });

        int curTime = 0;
        for(int i=0;i<k;i++) {
            waitLeft.offer(i);
        }
        while(n > 0 || workRight.size() > 0 || waitRight.size() > 0) {
            while(workLeft.size() > 0 && workLeft.peek()[0] <= curTime) {
                waitLeft.add(workLeft.poll()[1]);
            }
            while(workRight.size() > 0 && workRight.peek()[0] <= curTime) {
                waitRight.add(workRight.poll()[1]);
            }
            if(!waitRight.isEmpty()) {
                int id = waitRight.poll();
                curTime += time[id][2];
                workLeft.offer(new int []{curTime + time[id][3],id});
            }
            else if(n > 0 && !waitLeft.isEmpty()) {
                int id = waitLeft.poll();
                curTime += time[id][0];
                workRight.offer(new int []{curTime + time[id][1], id});
                n--;
            } else {
                int minn = Integer.MAX_VALUE;
                if(!workLeft.isEmpty()) {
                    minn = Math.min(minn, workLeft.peek()[0]);
                }
                if(!workRight.isEmpty()) {
                    minn = Math.min(minn, workRight.peek()[0]);
                }
                if(minn != Integer.MAX_VALUE) {
                    curTime = Math.max(curTime,minn);
                }
            }
        }
        return curTime;
    }
    public static void main(String[] args) {
        
    }
}
