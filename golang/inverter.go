	package main

	import (
		"fmt"
		"strings"
	)

	func InverterString(s string) string {
		var arr = strings.Split(s, "")
		var inverse_arr []string;
		for i := len(arr) - 1; i >= 0; i-- {
			inverse_arr = append(inverse_arr, arr[i])
		}

		var inverse_string = strings.Join(inverse_arr, "")

		return inverse_string
	}
	func main_3() {
		fmt.Print(InverterString("FALA MESTRE"))
	}
