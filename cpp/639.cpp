//恶心的想吐
class Solution {
public:
    typedef long long ll;
    int numDecodings(string s) {
        const int mod = 1e9+7;
        int n = s.size();
        if(s[0]=='0')return 0;
            if(1<=n&&s[1]=='0')
            {
                if(s[0]=='1' || s[0]=='2')
                    f[1][1] = 1;
                else if(s[0]=='*')
                    f[1][1] = 2;
                else return 0;
            }
            else
            {
                f[1][1] = (s[0]=='*'?9:1);
            }
        f[1][2] = 0;
        f[0][1] = 1;
        for(int i=2;i<=n;i++)
        {
            if(i<=n&&s[i]=='0')
            {
                if(s[i-1]=='1' || s[i-1]=='2')
                    f[i][1] = (f[i-1][1]+f[i-1][2])%mod;
                else if(s[i-1]=='*')
                    f[i][1] = ((f[i-1][1]+f[i-1][2])%mod*2)%mod;
                else return 0;
                continue;
            }
            if(s[i-1]=='0')
            {
                f[i][1] = (f[i-1][1]+f[i-1][2])%mod;
                continue;
            }
            f[i][1] = (f[i-1][1]+f[i-1][2])%mod*cal1(s,i-1)%mod;
            f[i][2] = (f[i-2][1]+f[i-2][2])%mod*cal2(s,i-1)%mod;
        }

        return (f[n][1] + f[n][2])%mod;
    }
    // 0 只会影响它前面的
    // 当一个字符后面是0的时候--它只能算2（'*'）或者1 ('1','2')
    // 如果字符0 前面不是 1，2，* 的时候直接返回0
    ll f[100005][3];
    int cal1(string& s,int k)
    {
        if(s[k]=='0')return 0;
        if(s[k]=='*')return 9;
        return 1;
    }
    int cal2(string& s,int k)
    {
        if(s[k-1]=='*')
        {
            if(s[k]=='*')return 15;
            if(s[k]<='6')return 2;
            return 1;
        }
        else
        {
            if(s[k-1]=='1')
            {
                if(s[k]=='*')return 9;
                else return 1;
            }
            if(s[k-1]=='2')
            {
                if(s[k]=='*')return 6;
                else if(s[k]<='6')return 1;
            }
        }
        return 0;
    }
};


