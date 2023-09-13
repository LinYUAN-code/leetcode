package L352

// 每次插入的时候--进行二分查找插入位置
type SummaryRanges struct {
	data [][]int
}

func Constructor() SummaryRanges {
	s := SummaryRanges{
		data: make([][]int, 0),
	}
	//添加哨兵
	s.data = append(s.data, []int{-999999, -999999}, []int{999999, 999999})
	return s
}

func (this *SummaryRanges) AddNum(val int) {
	l, r := 0, len(this.data)-1
	for l < r {
		mid := (l + r) / 2
		if this.data[mid][0] > val {
			r = mid
		} else {
			l = mid + 1
		}
	}
	l = r - 1
	if this.data[l][0] <= val && this.data[l][1] >= val {
		return
	} else if this.data[l][1]+1 == val && this.data[r][0] == val+1 {
		c := []int{this.data[l][0], this.data[r][1]}
		this.data = append(this.data[:l], append([][]int{c}, this.data[l+2:]...)...)
	} else if this.data[l][1]+1 == val {
		this.data[l][1] = val
	} else if this.data[r][0] == val+1 {
		this.data[r][0] = val
	} else {
		this.data = insert(this.data, []int{val, val}, r)
	}
}

func (this *SummaryRanges) GetIntervals() [][]int {
	return this.data[1 : len(this.data)-1]
	// return this.data
}

func insert(s [][]int, insert []int, k int) [][]int {
	into := [][]int{insert}
	return append(s[:k], append(into, s[k:]...)...)
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddNum(val);
 * param_2 := obj.GetIntervals();
 */
