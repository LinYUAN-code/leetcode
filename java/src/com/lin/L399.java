package src.com.lin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;



public class L399 {
    class PV {
        public String key;
        public double value;
        PV(String key,double value) {
            this.key = key;
            this.value = value;
        }
    }
    Map<String, List<PV> > e = new HashMap<>();
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        for(int i=0;i<equations.size();i++) {
            List<String> eq = equations.get(i);
            double value = values[i];
            List<PV> edges0 = e.get(eq.get(0));
            List<PV> edges1 = e.get(eq.get(1));
            if(edges0 == null) {
                edges0 = new ArrayList<>();
                e.put(eq.get(0), edges0);
            }
            if(edges1 == null) {
                edges1 = new ArrayList<>();
                e.put(eq.get(1), edges1);
            }
            edges0.add(new PV(eq.get(1), value));
            edges1.add(new PV(eq.get(0), 1.0 / value));
        }
        double ans[] = new double[queries.size()];
        
        
        for (int i = 0; i < queries.size(); i++) {
            List<String> que = queries.get(i);
            ans[i] = bfs(que.get(0), que.get(1));
        }

        return ans;
    }
    double bfs(String a, String b) {
        if(e.get(a) == null)return -1.0;
        if(a.equals(b))return 1.0;
        Queue<PV> q = new LinkedList<>();
        Map<String, Boolean> st = new HashMap<>();
        q.add(new PV(a, 1));
        st.put(a, true);
        while(q.size() > 0) {
            PV u = q.poll();
            if(u.key.equals(b))return u.value;
            for(PV edge : e.get(u.key)) {
                if(st.get(edge.key) != null && st.get(edge.key))continue;
                q.add(new PV(edge.key, edge.value * u.value));
                st.put(edge.key, true);
            }
        }
        return -1.0;
    }
}
