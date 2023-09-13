class TopVotedCandidate {
public:
    typedef pair<int,int> PII;
    vector<PII> name;
    TopVotedCandidate(vector<int>& persons, vector<int>& times) {
        priority_queue<PII> q; 
        vector<int> mark = vector<int>(persons.size());
        for(int i=0;i<persons.size();i++) {
            mark[persons[i]]++;
            q.push({mark[persons[i]]*5000+i,persons[i]});
            auto t = q.top();
            name.push_back({times[i],t.second});
        }
    }
    
    int q(int t) {
        int l=0,r=name.size()-1;
        while(l<r) {
            int mid = (l+r+1) >> 1;
            if(name[mid].first <= t)l = mid;
            else r = mid - 1;
        }
        return name[l].second;
    }
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * TopVotedCandidate* obj = new TopVotedCandidate(persons, times);
 * int param_1 = obj->q(t);
 */