package main

import "fmt"

func main() {
	mp := make([]map[string]int, 10)
	mp[0]["s"] = 1
	fmt.Println(mp[0]["s"])
}