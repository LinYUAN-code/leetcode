package leetcode


/*   Below is the interface for Iterator, which is already defined for you.
 *
 *   type Iterator struct {
 *
 *   }
 *
 *   func (this *Iterator) hasNext() bool {
 *		// Returns true if the iteration has more elements.
 *   }
 *
 *   func (this *Iterator) next() int {
 *		// Returns the next element in the iteration.
 *   }
 */

type PeekingIterator struct {
	item *Iterator
	ended bool
	nn int
}

func Constructor(iter *Iterator) *PeekingIterator {
	i := &PeekingIterator{item:iter}
	if i.item.hasNext() {
		i.nn = i.item.next()
	}
	return i
}

func (this *PeekingIterator) hasNext() bool {
	return!this.ended
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
