class Solution {
    int mid;
    boolean ans;
    Map<Integer,Integer> mp;
    public void dfs1(int u,int sum,int[] nums,int count) {
        if(u==mid) {
            if(count!=0 && sum==0) {
                ans = true;
            } else if(sum==0) {
                return ;
            }
            this.mp.put(sum,count);
            return ;
        }
        dfs1(u+1,sum,nums,count);
        dfs1(u+1,sum+nums[u],nums,count+1);
    }
    public void dfs2(int u,int sum,int[] nums,int count) {
        if(u==nums.length) {
            if(count!=0 && sum==0) {
                ans = true;
                return ;
            }
            if(this.mp.get(-sum)!=null) {
               if(count + this.mp.get(-sum) == nums.length)return ;
               ans = true; 
            }
            return ;
        }
        dfs2(u+1,sum,nums,count);
        dfs2(u+1,sum+nums[u],nums,count+1);
    }
    public boolean splitArraySameAverage(int[] nums) {
        if(nums.length==1)return false;
        int sum = 0;
        ans = false;
        for(int i=0;i<nums.length;i++)sum += nums[i];
        for(int i=0;i<nums.length;i++)nums[i] *= nums.length;
        for(int i=0;i<nums.length;i++)nums[i] -= sum;

        this.mid = nums.length / 2;

        mp = new HashMap<>();
        dfs1(0,0,nums,0);
        dfs2(mid,0,nums,0);
        return ans;
    }

} 