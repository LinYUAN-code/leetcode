package L492

import "math"

func constructRectangle(area int) []int {
	t := int(math.Sqrt(float64(area)))
	for {
		if area%t == 0 {
			return []int{area / t, t}
		}
		t--
	}
	return []int{0, 0}
}
