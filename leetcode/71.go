package leetcode

import (
	"bytes"
	"strings"
)
func simplifyPath(path string) string {
    s := strings.Split(path,"/")
    stk := make([]string,len(s))
    top := -1
    for i:=0;i<len(s);i++ {
        if len(s[i])==0 || s[i]=="." {
            continue
        }
        if s[i] == ".." {
            if top>-1 {
                top--
            }
            continue
        }
        top++
        stk[top] = s[i]
    }
    ans := bytes.Buffer{}
    ans.WriteString("/")
    for i:=0;i<top;i++ {
        ans.WriteString(stk[i])
        ans.WriteString("/")
    }
    if top!=-1 {
        ans.WriteString(stk[top])
    }
    return ans.String()
}