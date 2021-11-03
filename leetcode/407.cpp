class Solution {
public:
    typedef pair<int,int> PII;
    typedef pair<int,PII> PIII;
    #define x first
    #define y second
    int vis[205][205];
    int dx[4] = {-1,1,0,0};
    int dy[4] = {0,0,-1,1};
    int trapRainWater(vector<vector<int>>& heightMap) {
        int n = heightMap.size();
        int m = heightMap[0].size();
        priority_queue<PIII,vector<PIII>,greater<PIII> > q;
        for(int i=0;i<n;i++)
        {
            vis[i][0] = 1;
            vis[i][m-1] = 1;
            q.push({heightMap[i][0],{i,0}});
            q.push({heightMap[i][m-1],{i,m-1}});
        }
        for(int i=1;i<m-1;i++) {
            vis[0][i] = vis[n-1][i] = 1;
            q.push({heightMap[0][i],{0,i}});
            q.push({heightMap[n-1][i],{n-1,i}});
        }
        int ans = 0;
        while(q.size()) {
            PIII t = q.top();
            q.pop();
            for(int i=0;i<4;i++) {
                int x = t.y.x + dx[i];
                int y = t.y.y + dy[i];
                if(x<0||x>=n||y<0||y>=m||vis[x][y])continue;
                vis[x][y] = 1;
                if (t.x > heightMap[x][y]) {
                    ans += t.x - heightMap[x][y];
                    heightMap[x][y] = t.x;
                }
                q.push({heightMap[x][y],{x,y}});
            }
        }
        return ans;
    }
};