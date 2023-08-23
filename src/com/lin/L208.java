package src.com.lin;

public class L208 {
    class Trie {
        public int idx;
        public int[][] ne;
        public boolean[] mark;
        public Trie() {
            this.ne = new int[100000][26];
            this.mark = new boolean[100000];
        }
        
        public void insert(String word) {
            int now = 0;
            for(char ch : word.toCharArray()) {
                int c = ch - 'a';
                if(ne[now][c] == 0) {
                    ne[now][c] = ++idx;
                }
                now = ne[now][c];
            } 
            mark[now] = true;
        }
        
        public boolean search(String word) {
            int now = 0;
            for(char ch : word.toCharArray()) {
                int c = ch - 'a';
                if(ne[now][c] == 0) {
                    return false;
                }
                now = ne[now][c];
            }
            return mark[now];
        }
        
        public boolean startsWith(String prefix) {
            int now = 0;
            for(char ch : prefix.toCharArray()) {
                int c = ch - 'a';
                if(ne[now][c] == 0) {
                    return false;
                }
                now = ne[now][c];
            }
            return true;
        }
    }
}
