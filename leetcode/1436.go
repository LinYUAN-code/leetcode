package leetcode


func destCity(paths [][]string) string {
	// 哈希---由于保证一定只有一个终点
	mp := make(map[string]string)
	for i:=0;i<len(paths);i++ {
		mp[paths[i][0]] = paths[i][1]
	}
	st := paths[0][0]
	for {
		ed,ok := mp[st]
		if !ok {
			return st
		}
		st = ed
	}
	return ""
}
