class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        // 我们需要记录每次出现新矩形时候的高度和x坐标
        // 我们可以看出每次高度变化的时候--我们都需要记录
        // 所以我们可以使用一个pre来记录上一个高度是多少
        // 但是我们的还得处理宽度的问题--也就是超过一定宽度pre可能会失效
        
        // 而且只有当我们的高度是高于其他天际线的高度的时候我们才会把这个点加入到答案中去
        // 那么我们就需要维护当前有效的天际线高度，所以我们可以考虑每一个矩形右端点的时候将天际线加入考虑中，
        // 左端点的时候将天际线移除考虑，同时我们需要在天际线集合中找出最大值，这样我们的问题就容易解决了。
        // 数据结构选型：如果采用优先队列--那么查询最大值的操作是logn的，删除操作时n的 时间复杂度n^2
        // 于是我们可以采用删除和查询操作都是logn的平衡树来解决这个问题。
        vector<vector<int>> ans;
        typedef pair<int,int> PII;
        #define x first
        #define y second
        vector<PII> p;
        // 将所有点加入其中==同时我们需要辨别出是左端点还是右端点（偷懒就给高度取个负号好了）
        // 注意map默认是从小到大排序的所以我们把高度取负就好了---懒得重写运算符
        // 注意这里我们还得让相同值得右端点先于左端点
        for(int i=0;i<buildings.size();i++) {
            p.push_back({buildings[i][0],-buildings[i][2]});
            p.push_back({buildings[i][1],buildings[i][2]});
        }
        sort(p.begin(),p.end());

        map<int,int> tree;
        // 插入底线
        tree.insert({0,0});
        // cout<<tree.begin()->first<<endl;
        for(int i=0;i<p.size();i++) {
            if(p[i].y<0) { //左端点
                int h = -p[i].y;
                if(h>-tree.begin()->first) {
                    ans.push_back({p[i].x,h});
                }
                auto it = tree.find(-h);
                if(it == tree.end())tree.insert_or_assign(-h,1);
                else tree.insert_or_assign(-h,it->second+1);
            } else { //右端点--删除
                int h = p[i].y;
                auto it = tree.find(-h);
                it->second--;
                if(it->second == 0) {
                    tree.erase(it);
                }

                int nh = -tree.begin()->first;
                if(nh < h) {
                    ans.push_back({p[i].x,nh});
                }
            }
        }
        return ans;
    }
};