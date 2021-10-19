package leetcode

type WordDictionary struct {
	val   byte
	sons  []*WordDictionary
	isend bool
}

func Constructor() WordDictionary {
	return WordDictionary{}
}

func (this *WordDictionary) AddWord(word string) {
	b := []byte(word)
	this.insert(b)
}

func (this *WordDictionary) insert(s []byte) {
	if len(s) == 0 {
		this.isend = true
		return
	}
	son := this.findSon(s)
	if son == nil {
		ns := &WordDictionary{}
		ns.val = s[0]
		this.sons = append(this.sons, ns)
		ns.insert(s[1:])
	} else {
		son.insert(s[1:])
	}
}

func (this *WordDictionary) findSon(s []byte) *WordDictionary {
	for i := 0; i < len(this.sons); i++ {
		if this.sons[i].val == s[0] {
			return this.sons[i]
		}
	}
	return nil
}

func (this *WordDictionary) findSons(s []byte) []*WordDictionary {
	ans := make([]*WordDictionary, 0)
	for i := 0; i < len(this.sons); i++ {
		if this.sons[i].val == s[0] || s[0] == '.' {
			ans = append(ans, this.sons[i])
		}
	}
	return ans
}

func (this *WordDictionary) Search(word string) bool {
	b := []byte(word)
	return this.find(b)
}

func (this *WordDictionary) find(s []byte) bool {
	if len(s) == 0 {
		return this.isend
	}
	sons := this.findSons(s)
	for i := 0; i < len(sons); i++ {
		if sons[i].find(s[1:]) {
			return true
		}
	}
	return false
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddWord(word);
 * param_2 := obj.Search(word);
 */