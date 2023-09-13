package L284

type Iterator struct {
}

func (this *Iterator) hasNext() bool {
	panic("todo")
}

func (this *Iterator) next() int {
	panic("todo")
}

type PeekingIterator struct {
	item  *Iterator
	ended bool
	nn    int
}

func Constructor(iter *Iterator) *PeekingIterator {
	i := &PeekingIterator{item: iter}
	if i.item.hasNext() {
		i.nn = i.item.next()
	}
	return i
}

func (this *PeekingIterator) hasNext() bool {
	return !this.ended
}

func (this *PeekingIterator) next() int {
	if this.item.hasNext() {
		c := this.nn
		this.nn = this.item.next()
		return c
	} else {
		this.ended = true
		return this.nn
	}
}

func (this *PeekingIterator) peek() int {
	return this.nn
}
